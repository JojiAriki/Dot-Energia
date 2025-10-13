/**
 * Mapeadores para converter dados do formulário para o formato RD Station
 *
 * Este módulo facilita a conversão de diferentes formatos de dados
 * para o formato esperado pela integração com RD Station
 *
 * @module lib/rdstation/mapper
 */

import type { ContactFormData } from '@/lib/validations/contact-form';
import type { RdStationInput, RdStationContactData } from '@/types/rdstation';

/**
 * Configuração para mapeamento de formulário para RD Station
 */
export interface FormToRdStationConfig {
  /** Identificador do formulário */
  formIdentifier: string;

  /** Tags a serem aplicadas ao lead */
  tags?: string[];

  /** Origem do lead */
  origin?: string;

  /** Nome do formulário */
  formName?: string;

  /** Campos customizados adicionais */
  customFields?: Record<string, string>;
}

/**
 * Converte dados do formulário de contato para o formato RD Station
 *
 * @param formData - Dados do formulário validados
 * @param config - Configurações de mapeamento
 * @returns Objeto no formato RdStationInput pronto para envio
 *
 * @example
 * ```typescript
 * const rdStationData = mapContactFormToRdStation(formData, {
 *   formIdentifier: 'landing-page-energia-solar',
 *   tags: ['website', 'energia-solar', 'comercial'],
 *   origin: 'Landing Page',
 *   formName: 'Formulário de Contato - Energia Solar'
 * });
 *
 * await sendRdStationConversion(rdStationData);
 * ```
 */
export function mapContactFormToRdStation(
  formData: ContactFormData,
  config: FormToRdStationConfig
): RdStationInput {
  // Limpa o telefone removendo caracteres especiais
  const cleanPhone = formData.phone.replace(/\D/g, '');

  // Monta os dados do contato
  const rdStationDados: RdStationContactData = {
    nome: formData.firstName,
    email: formData.email,
    telefone: cleanPhone,
  };

  // Adiciona campos do formulário como customizados
  // Importante: empresa e cargo são campos do seu formulário atual
  if (formData.company) {
    rdStationDados['empresa'] = formData.company;
  }

  if (formData.position) {
    rdStationDados['cargo'] = formData.position;
  }

  if (formData.monthlyConsumption) {
    rdStationDados['consumo_mensal'] = formData.monthlyConsumption;
  }

  // Adiciona origem se configurada
  if (config.origin) {
    rdStationDados.origem = config.origin;
  }

  // Adiciona nome do formulário se configurado
  if (config.formName) {
    rdStationDados.nome_formulario = config.formName;
  }

  // Adiciona campos customizados adicionais
  if (config.customFields) {
    Object.entries(config.customFields).forEach(([key, value]) => {
      rdStationDados[key] = value;
    });
  }

  // Retorna o objeto completo
  return {
    identificador: config.formIdentifier,
    rdStationDados,
    tags: config.tags || [],
  };
}

/**
 * Cria tags automáticas baseadas nos dados do formulário
 *
 * @param formData - Dados do formulário
 * @returns Array de tags sugeridas
 *
 * @example
 * ```typescript
 * const tags = generateAutoTags(formData);
 * // Retorna: ['website', 'energia-solar', 'consumo-500-1000']
 * ```
 */
export function generateAutoTags(formData: ContactFormData): string[] {
  const tags: string[] = ['website'];

  // Tag baseada no consumo mensal
  if (formData.monthlyConsumption) {
    const consumptionTag = formData.monthlyConsumption
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
    tags.push(`consumo-${consumptionTag}`);
  }

  // Adiciona tag indicando que é um lead qualificado (tem empresa e cargo)
  if (formData.company && formData.position) {
    tags.push('lead-qualificado');
  }

  return tags;
}

/**
 * Cria um identificador único para a conversão
 * Útil para rastreamento e debugging
 *
 * @param baseIdentifier - Identificador base (ex: nome do formulário)
 * @param includeTimestamp - Se deve incluir timestamp
 * @returns Identificador único
 *
 * @example
 * ```typescript
 * const id = createConversionIdentifier('form-contact', true);
 * // Retorna: 'form-contact-1696896000000'
 * ```
 */
export function createConversionIdentifier(
  baseIdentifier: string,
  includeTimestamp: boolean = false
): string {
  if (includeTimestamp) {
    return `${baseIdentifier}-${Date.now()}`;
  }
  return baseIdentifier;
}

/**
 * Valida se os dados mínimos necessários para RD Station estão presentes
 *
 * @param data - Dados a serem validados
 * @returns True se os dados são válidos
 */
export function validateRdStationData(
  data: Partial<RdStationContactData>
): boolean {
  return !!(data.email && data.nome);
}
