import type { ImageMetadata } from 'astro';

// Every photo in src/assets/images, keyed by file name without extension.
const FILES = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.webp', { eager: true });

const PHOTOS: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(FILES).map(([path, mod]) => [path.split('/').pop()!.replace(/\.webp$/, ''), mod.default]),
);

export type PhotoName = string;

/** Look up a photo by file name. Throws on a missing file so content typos fail the build. */
export function photo(name: PhotoName): ImageMetadata {
  const image = PHOTOS[name];
  if (!image) throw new Error(`Unknown photo "${name}" (expected src/assets/images/${name}.webp)`);
  return image;
}
