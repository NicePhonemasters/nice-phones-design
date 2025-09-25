export function getBaseUrl() {
  let vercelUrl: string;

  if (process.env.VERCEL_TARGET_ENV === 'production') {
    vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  } else {
    vercelUrl = process.env.VERCEL_URL;
  }

  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return 'http://localhost:3000';
}
