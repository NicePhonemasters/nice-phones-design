export function getBaseUrl() {
  if (typeof window === 'undefined') {
    return '';
  }

  const vercelUrl = process.env.VERCEL_URL;

  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return 'http://localhost:3000';
}
