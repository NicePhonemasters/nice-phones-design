import { redirect } from 'next/navigation';

import { Links } from '@/types/Links';

export default function CatalogRedirectPage() {
  redirect(Links.PhoneCatalog);
}
