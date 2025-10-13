'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import InputMask from 'react-input-mask';
import {
  contactFormSchema,
  type ContactFormData,
} from '@/lib/validations/contact-form';
import { submitLead } from '@/services/lead';

export default function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Envia o lead para a API
      const result = await submitLead(data);

      if (result.success) {
        setSubmitStatus('success');
        reset();

        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message);

        setTimeout(() => {
          setSubmitStatus('idle');
          setErrorMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Erro:', error);
      setSubmitStatus('error');
      setErrorMessage(
        'Erro ao enviar solicitação. Tente novamente mais tarde.'
      );

      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Nome e Email */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-white mb-2"
          >
            Nome
          </label>
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            className={`w-full px-4 py-3 rounded-xl border bg-white/10 backdrop-blur-sm text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all ${
              errors.firstName
                ? 'border-red-400 bg-red-500/10'
                : 'border-white/30 focus:border-primary-400'
            }`}
            placeholder="Digite seu nome"
            disabled={isSubmitting}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-400">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`w-full px-4 py-3 rounded-xl border bg-white/10 backdrop-blur-sm text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all ${
              errors.email
                ? 'border-red-400 bg-red-500/10'
                : 'border-white/30 focus:border-primary-400'
            }`}
            placeholder="Digite seu email"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Telefone e Empresa */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white mb-2"
          >
            Telefone
          </label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 99999-9999"
                type="tel"
                id="phone"
                className={`w-full px-4 py-3 rounded-xl border bg-white/10 backdrop-blur-sm text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all ${
                  errors.phone
                    ? 'border-red-400 bg-red-500/10'
                    : 'border-white/30 focus:border-primary-400'
                }`}
                placeholder="(00) 00000-0000"
                disabled={isSubmitting}
              />
            )}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-white mb-2"
          >
            Empresa
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className={`w-full px-4 py-3 rounded-xl border bg-white/10 backdrop-blur-sm text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all ${
              errors.company
                ? 'border-red-400 bg-red-500/10'
                : 'border-white/30 focus:border-primary-400'
            }`}
            placeholder="Digite o nome da empresa"
            disabled={isSubmitting}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-400">
              {errors.company.message}
            </p>
          )}
        </div>
      </div>

      {/* Cargo */}
      <div>
        <label
          htmlFor="position"
          className="block text-sm font-medium text-white mb-2"
        >
          Cargo
        </label>
        <input
          {...register('position')}
          type="text"
          id="position"
          className={`w-full px-4 py-3 rounded-xl border bg-white/10 backdrop-blur-sm text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-400/20 outline-none transition-all ${
            errors.position
              ? 'border-red-400 bg-red-500/10'
              : 'border-white/30 focus:border-primary-400'
          }`}
          placeholder="Digite seu cargo"
          disabled={isSubmitting}
        />
        {errors.position && (
          <p className="mt-1 text-sm text-red-400">{errors.position.message}</p>
        )}
      </div>

      {/* Consumo Mensal */}
      <div>
        <label
          htmlFor="monthlyConsumption"
          className="block text-sm font-medium text-white mb-2"
        >
          Consumo Mensal Aproximado (kWh)
        </label>
        <div className="relative">
          <select
            {...register('monthlyConsumption')}
            id="monthlyConsumption"
            className={`w-full px-4 py-3 pr-12 rounded-xl border bg-white/10 backdrop-blur-sm text-white focus:ring-2 focus:ring-primary-400/20 outline-none transition-all appearance-none cursor-pointer ${
              errors.monthlyConsumption
                ? 'border-red-400 bg-red-500/10'
                : 'border-white/30 focus:border-primary-400'
            }`}
            disabled={isSubmitting}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.5em 1.5em',
              colorScheme: 'dark',
            }}
          >
            <option value="" disabled>
              Selecione uma faixa de consumo
            </option>
            <option value="0-200">0 - 200 kWh</option>
            <option value="201-500">201 - 500 kWh</option>
            <option value="501-1000">501 - 1.000 kWh</option>
            <option value="1001-2000">1.001 - 2.000 kWh</option>
            <option value="2001-5000">2.001 - 5.000 kWh</option>
            <option value="5001+">Acima de 5.000 kWh</option>
          </select>
        </div>
        {errors.monthlyConsumption && (
          <p className="mt-1 text-sm text-red-400">
            {errors.monthlyConsumption.message}
          </p>
        )}
      </div>

      {/* Mensagens de status */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-400/50 rounded-xl backdrop-blur-sm animate-fade-in">
          <p className="text-green-300 font-semibold">
            ✅ Solicitação enviada com sucesso!
          </p>
          <p className="text-green-200 text-sm mt-1">
            Nossa equipe entrará em contato em até 24h.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-400/50 rounded-xl backdrop-blur-sm animate-fade-in">
          <p className="text-red-300 font-semibold">
            ❌ Erro ao enviar formulário
          </p>
          <p className="text-red-200 text-sm mt-1">
            {errorMessage || 'Por favor, tente novamente.'}
          </p>
        </div>
      )}

      {/* Botão Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Enviar Mensagem
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
