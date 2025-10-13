/**
 * Módulo de integração com RD Station
 *
 * Este módulo exporta todas as funcionalidades necessárias
 * para integração com RD Station de forma modular e reutilizável
 *
 * @module lib/rdstation
 */

// Re-exporta tipos
export type {
  RdStationContactData,
  RdStationInput,
  RdStationApiPayload,
  RdStationResponse,
  RdStationConfig,
} from '@/types/rdstation';

// Re-exporta serviços
export {
  RdStationIntegration,
  createRdStationClient,
  sendRdStationConversion,
} from '@/services/rdstation';

// Re-exporta mapeadores
export {
  mapContactFormToRdStation,
  generateAutoTags,
  createConversionIdentifier,
  validateRdStationData,
} from './mapper';

export type { FormToRdStationConfig } from './mapper';
