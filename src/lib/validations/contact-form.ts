import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  company: z.string().min(2, 'Empresa deve ter pelo menos 2 caracteres'),
  position: z.string().min(2, 'Cargo deve ter pelo menos 2 caracteres'),
  monthlyConsumption: z
    .string()
    .min(1, 'Selecione uma faixa de consumo mensal'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
