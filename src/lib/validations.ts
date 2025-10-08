import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
  position: z.string().min(2, 'Cargo é obrigatório'),
  averageConsumption: z.string().min(1, 'Consumo médio é obrigatório'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
