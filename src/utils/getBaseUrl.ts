export function getBaseUrl() {
  const vercelUrl =
    process.env.VERCEL_TARGET_ENV === 'production'
      ? process.env.VERCEL_URL
      : process.env.VERCEL_GIT_BRANCH;
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }
  return 'http://localhost:3000';
}
