export function getBaseUrl() {
  let vercelUrl: string;

  if (
    process.env.VERCEL_TARGET_ENV === 'production' &&
    process.env.NEXT_PUBLIC_VERCEL_URL ===
      process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  } else {
    vercelUrl = process.env.VERCEL_URL;
  }

  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return 'http://localhost:3000';
}
