// Photos from Wikimedia Commons used under a Creative Commons licence: the author must be credited
// wherever the photo appears, with the licence and whether it was cropped.
export interface PhotoCredit {
  author: string;
  license: 'CC0' | 'CC BY 3.0' | 'CC BY 4.0' | 'CC BY-SA 4.0';
  source: string;
  cropped?: boolean;
}

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  'plaisirs-d-hiver-grande-roue-bruxelles': {
    author: 'Edison McCullen',
    license: 'CC BY-SA 4.0',
    source: "https://commons.wikimedia.org/wiki/File:Plaisirs_d%27Hiver.jpg",
  },
  'plaisirs-d-hiver-eglise-sainte-catherine': {
    author: 'Vanvelthem Cédric',
    license: 'CC BY-SA 4.0',
    source: "https://commons.wikimedia.org/wiki/File:Plaisirs_d%27Hiver_-_Bruxelles_-_Eglise_Ste-Catherine_01.jpg",
  },
  'sapin-de-noel-grand-place-bruxelles': {
    author: 'Luca Mangiat',
    license: 'CC BY 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Brussels_Grand-Place_-_Christmas_tree.jpg',
    cropped: true,
  },
  'eglise-notre-dame-du-sablon-bruxelles': {
    author: 'Flocci Nivis',
    license: 'CC BY 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:20180907_Church_of_Our_Blessed_Lady_of_the_Sablon_Brussels_01.jpg',
  },
  'marche-aux-puces-jeu-de-balle-bruxelles': {
    author: 'Henxter',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Brussel_oude_markt.JPG',
  },
  'gare-bruxelles-midi-quai-train': {
    author: 'y-yoshiike',
    license: 'CC BY 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Gare_de_Bruxelles-Midi,_Belgium_-_panoramio.jpg',
    cropped: true,
  },
};

const LICENSE_URL: Record<PhotoCredit['license'], string> = {
  CC0: 'https://creativecommons.org/publicdomain/zero/1.0/',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
};

export function licenseUrl(credit: PhotoCredit): string {
  return LICENSE_URL[credit.license];
}
