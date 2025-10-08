export function useBasePath() {
  const basePath = process.env.NODE_ENV === 'production' ? '/Dot-Energia' : '';

  const getImagePath = (path: string) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${basePath}/${cleanPath}`;
  };

  return { basePath, getImagePath };
}
