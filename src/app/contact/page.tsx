import { Metadata } from 'next';
import { contactMetadata } from '@/lib/metadata';
import ContactPageContent from './contact-page-content';

export const metadata: Metadata = {
  title: contactMetadata.title,
  description: contactMetadata.description,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
