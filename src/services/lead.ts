import type { ContactFormData } from '@/lib/validations/contact-form';

/**
 * Envia um lead para o RD Station através da API
 *
 * @param data - Dados validados do formulário de contato
 * @returns Promise com resultado do envio
 */
export async function submitLead(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    // Envia para a API Route que processa o lead
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Erro ao enviar lead');
    }

    return {
      success: true,
      message:
        result.message ||
        'Análise solicitada com sucesso! Nossa equipe entrará em contato em até 24h.',
    };
  } catch (error) {
    console.error('Erro ao enviar lead:', error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Erro ao enviar solicitação. Tente novamente ou entre em contato pelo telefone.',
    };
  }
}
