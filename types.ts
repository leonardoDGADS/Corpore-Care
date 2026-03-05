import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  name: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  image: string;
}

export interface Partner {
  name: string;
  logo?: string; // Optional URL for logo
}

export interface CompanyValue {
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  district: string;
  city: string;
  zip: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  instagram: string;
  facebook: string;
  cnpj: string;
}