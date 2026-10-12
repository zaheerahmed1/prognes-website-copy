export function getSiteUrl(): URL {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;

  if (fromEnv) {
    return new URL(fromEnv);
  }

  return new URL("http://localhost:3000");
}
