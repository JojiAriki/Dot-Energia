/**
 * Serviço de integração com RD Station
 * Replica o comportamento do IntegradorRdStation.cs
 *
 * @module services/rdstation
 */

import type {
  RdStationInput,
  RdStationApiPayload,
  RdStationResponse,
  RdStationConfig,
} from '@/types/rdstation';

/**
 * Classe principal para integração com RD Station
 */
export class RdStationIntegration {
  private config: Required<RdStationConfig>;

  private static readonly DEFAULT_API_URL =
    'https://www.rdstation.com.br/api/1.3/conversions';
  private static readonly DEFAULT_TIMEOUT = 30000;

  constructor(config: RdStationConfig) {
    this.config = {
      token: config.token,
      apiUrl: config.apiUrl || RdStationIntegration.DEFAULT_API_URL,
      timeout: config.timeout || RdStationIntegration.DEFAULT_TIMEOUT,
    };

    if (!this.config.token) {
      throw new Error('RD Station token is required');
    }
  }

  /**
   * Envia uma conversão para o RD Station
   * Replica o método EnviaContatoApi do C#
   */
  async sendConversion(input: RdStationInput): Promise<RdStationResponse> {
    try {
      // Validação básica
      if (!input.rdStationDados.email) {
        return {
          success: false,
          message: 'Email is required',
          statusCode: 400,
        };
      }

      // Monta o payload da API
      const payload = this.buildPayload(input);

      // 1. Serializa o objeto para string JSON (equivalente ao JsonConvert.SerializeObject)
      const postData = JSON.stringify(payload);

      // 2. Converte a string para bytes UTF-8 (equivalente ao Encoding.UTF8.GetBytes)
      const encoder = new TextEncoder();
      const byteArray = encoder.encode(postData);

      // 3. Cria o content com encoding UTF-8 explícito
      // (equivalente ao StringContent com System.Text.Encoding.UTF8)
      const stringContent = new Blob([byteArray], {
        type: 'application/json; charset=utf-8',
      });

      // Configuração da requisição com timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(),
        this.config.timeout
      );

      // Envia a requisição (equivalente ao client.PostAsync)
      const response = await fetch(this.config.apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: stringContent,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Verifica se foi sucesso (equivalente ao StatusCode == HttpStatusCode.OK)
      if (response.ok) {
        return {
          success: true,
          message: 'Conversion sent successfully',
          statusCode: response.status,
        };
      }

      // Tenta extrair mensagem de erro
      let errorMessage = 'Failed to send conversion';
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.message || errorMessage;
      } catch {
        // Se não conseguir parsear, usa mensagem padrão
      }

      return {
        success: false,
        message: errorMessage,
        statusCode: response.status,
        error: `HTTP ${response.status}: ${response.statusText}`,
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            success: false,
            message: 'Request timeout',
            error: `Request exceeded ${this.config.timeout}ms timeout`,
          };
        }

        return {
          success: false,
          message: 'Network error',
          error: error.message,
        };
      }

      return {
        success: false,
        message: 'Unknown error',
        error: String(error),
      };
    }
  }

  /**
   * Constrói o payload para a API
   * Replica exatamente a estrutura do JsonConvert.SerializeObject do C#
   */
  private buildPayload(input: RdStationInput): RdStationApiPayload {
    const { rdStationDados, identificador, tags } = input;

    // Monta o payload exatamente como no C#
    const payload: RdStationApiPayload = {
      token_rdstation: this.config.token, // Obrigatório - Token Publico de autenticação
      identificador, // Obrigatório
      email: rdStationDados.email,
    };

    // Adiciona campos opcionais
    if (rdStationDados.nome) payload.nome = rdStationDados.nome;
    if (rdStationDados.telefone) payload.telefone = rdStationDados.telefone;
    if (rdStationDados.cpf) payload.cpf = rdStationDados.cpf;

    // Tags no formato string separada por vírgulas (String.Join(", ", tags))
    if (tags && tags.length > 0) {
      payload.tags = tags.join(', ');
    }

    // Adiciona campos customizados
    Object.keys(rdStationDados).forEach((key) => {
      if (!['nome', 'email', 'telefone', 'cpf'].includes(key)) {
        const value = rdStationDados[key];
        if (value !== undefined && value !== null && value !== '') {
          payload[key] = value;
        }
      }
    });

    return payload;
  }

  isConfigured(): boolean {
    return !!this.config.token && this.config.token.length > 0;
  }

  getApiUrl(): string {
    return this.config.apiUrl;
  }
}

/**
 * Cria instância do cliente usando variáveis de ambiente
 */
export function createRdStationClient(): RdStationIntegration {
  const token =
    process.env.RDSTATION_TOKEN || process.env.NEXT_PUBLIC_RDSTATION_TOKEN;

  if (!token) {
    console.error('RD Station token not found in environment variables');
    throw new Error(
      'RD Station token not found. Please set RDSTATION_TOKEN environment variable.'
    );
  }

  return new RdStationIntegration({
    token,
  });
}

/**
 * Função utilitária para enviar conversão diretamente
 */
export async function sendRdStationConversion(
  input: RdStationInput
): Promise<RdStationResponse> {
  const client = createRdStationClient();
  return client.sendConversion(input);
}
