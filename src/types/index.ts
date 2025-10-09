export interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  image?: string;
}

export interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  companyLogo?: string;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  position: string;
  averageConsumption: string;
  phone: string;
}

export interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
  hours: string;
}
