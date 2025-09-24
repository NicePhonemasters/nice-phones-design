export function getBaseUrl() {
  if (process.env.VERCEL_ENV === 'production') {
    return '';
  }

  const vercelUrl = process.env.VERCEL_URL;

  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return 'http://localhost:3000';
}
