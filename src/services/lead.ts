import type { ContactFormData } from '@/lib/validations';

export async function submitLead(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    // Aqui você integraria com seu serviço de leads (ex: CRM, email service, etc.)

    // Simulação de envio
    console.log('Lead enviado:', data);

    // Simular delay de rede
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simular sucesso (em produção, substituir pela integração real)
    return {
      success: true,
      message:
        'Análise solicitada com sucesso! Nossa equipe entrará em contato em até 24h.',
    };
  } catch (error) {
    console.error('Erro ao enviar lead:', error);
    return {
      success: false,
      message:
        'Erro ao enviar solicitação. Tente novamente ou entre em contato pelo telefone.',
    };
  }
}
