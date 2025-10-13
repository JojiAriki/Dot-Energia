/**
 * API Route para envio de leads para RD Station
 *
 * @route POST /api/lead
 */

import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact-form';
import {
  mapContactFormToRdStation,
  generateAutoTags,
  sendRdStationConversion,
} from '@/lib/rdstation';

export async function POST(request: NextRequest) {
  try {
    // Parse do body
    const body = await request.json();

    // Valida os dados do formulário
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Dados inválidos',
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Gera tags automáticas baseadas no formulário
    const autoTags = generateAutoTags(formData);

    // Adiciona tags customizadas
    const tags = [
      ...autoTags,
      'website',
      'energia-solar',
      'dot-energia',
      'landing-page',
    ];

    // Mapeia dados do formulário para formato RD Station
    const rdStationData = mapContactFormToRdStation(formData, {
      formIdentifier: 'landing-page-dot-energia',
      tags,
      origin: 'Website - Landing Page',
      formName: 'Formulário de Contato - Análise Solar',
      customFields: {
        // Adicione campos customizados aqui se necessário
        fonte: 'website',
        pagina: 'landing-page',
      },
    });

    // Envia para RD Station
    const result = await sendRdStationConversion(rdStationData);

    if (!result.success) {
      console.error('Erro ao enviar para RD Station:', result);

      // Retorna erro genérico para o cliente
      return NextResponse.json(
        {
          success: false,
          message:
            'Erro ao processar sua solicitação. Tente novamente mais tarde.',
        },
        { status: 500 }
      );
    }

    // Sucesso
    return NextResponse.json(
      {
        success: true,
        message:
          'Análise solicitada com sucesso! Nossa equipe entrará em contato em até 24h.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro na API de lead:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Erro interno do servidor',
      },
      { status: 500 }
    );
  }
}
