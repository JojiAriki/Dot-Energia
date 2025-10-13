/**
 * Tipos e Interfaces para integração com RD Station
 * Baseado na API v1.3 de conversões do RD Station
 */

/**
 * Dados básicos de um contato no RD Station
 */
export interface RdStationContactData {
  /** Nome completo do contato */
  nome: string;

  /** Email do contato */
  email: string;

  /** Telefone com DDD */
  telefone?: string;

  /** CPF do contato */
  cpf?: string;

  /** Cidade do contato */
  cidade?: string;

  /** Estado (UF) */
  estado?: string;

  /** Identificação do imóvel */
  imovel?: string;

  /** Data de nascimento */
  dataNascimento?: string;

  /** Faixa de renda */
  renda?: string;

  /** Origem do lead */
  origem?: string;

  /** Horário preferencial para atendimento */
  horaAtendimento?: string;

  /** Nome do formulário de origem */
  nome_formulario?: string;

  /** Campos customizados adicionais */
  [key: string]: string | undefined;
}

/**
 * Estrutura de entrada para envio ao RD Station
 */
export interface RdStationInput {
  /** Dados do contato */
  rdStationDados: RdStationContactData;

  /** Identificador único da conversão (ex: nome do formulário) */
  identificador: string;

  /** Tags para classificação do lead */
  tags?: string[];
}

/**
 * Payload completo enviado para a API do RD Station
 */
export interface RdStationApiPayload {
  /** Token de autenticação do RD Station */
  token_rdstation: string;

  /** Identificador da conversão */
  identificador: string;

  /** Email do contato (obrigatório) */
  email: string;

  /** Nome do contato */
  nome?: string;

  /** Telefone do contato */
  telefone?: string;

  /** Cidade do contato */
  cidade?: string;

  /** Estado do contato */
  estado?: string;

  /** CPF do contato */
  cpf?: string;

  /** Imóvel do contato */
  imovel?: string;

  /** Data de nascimento */
  dataNascimento?: string;

  /** Tags separadas por vírgula */
  tags?: string;

  /** Renda do contato */
  renda?: string;

  /** Origem do lead */
  origem?: string;

  /** Horário de atendimento */
  horaAtendimento?: string;

  /** Nome do formulário */
  nome_formulario?: string;

  /** Campos customizados adicionais */
  [key: string]: string | undefined;
}

/**
 * Resposta da API do RD Station
 */
export interface RdStationResponse {
  /** Indica se a conversão foi enviada com sucesso */
  success: boolean;

  /** Mensagem de retorno */
  message?: string;

  /** Código de status HTTP */
  statusCode?: number;

  /** Detalhes do erro, se houver */
  error?: string;
}

/**
 * Configuração do RD Station
 */
export interface RdStationConfig {
  /** Token público de autenticação do RD Station */
  token: string;

  /** URL da API (opcional, usa padrão se não informado) */
  apiUrl?: string;

  /** Timeout em milissegundos (opcional) */
  timeout?: number;
}
