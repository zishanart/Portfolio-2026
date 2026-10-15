export const DRIVE_LINKS = {
  amazonAPlus:
    "https://drive.google.com/drive/folders/1UrN_K4NqQPZTpTaIfuTm5ER9_sC2pFfR?usp=sharing",
  appStore:
    "https://drive.google.com/drive/folders/1aQh_VZtBFRYw5vSkEfmkDFedSRONhfcz?usp=sharing",
  logos:
    "https://drive.google.com/drive/folders/1M9yfyZ3R3zgn35SPWMfIrBzVR-IePKhT?usp=sharing",
  socialMedia:
    "https://drive.google.com/drive/folders/1wPe9Y3ttPRCGycmT1uU7BvqXWklUtUlA?usp=sharing",
  thumbnails:
    "https://drive.google.com/drive/folders/1yqViKjZNQaIwGja3WYv7H8UjIiMqgrHQ?usp=sharing",
  typography:
    "https://drive.google.com/drive/folders/1APd6FTHdO8VLvgYQqKYiOCbyS0vWj94k?usp=sharing",
  rootPortfolio:
    "https://drive.google.com/drive/folders/1yqViKjZNQaIwGja3WYv7H8UjIiMqgrHQ?usp=sharing",
} as const;

export function getImageAlt(filename: string, category: string): string {
  const name = filename
    .replace(/\.(jpg|jpeg|png|webp|gif|svg)+$/gi, "")
    .replace(/[_-]/g, " ")
    .replace(/\b[a-f0-9]{20,}\b/gi, "")
    .replace(/\d{8,}/g, "")
    .trim();
  const cleanName = name || category;
  return `${category} by Zishan Khan – ${cleanName}`;
}

export function getAppStoreImageDimensions(filename: string): { width: number; height: number } {
  const lower = filename.toLowerCase();
  if (lower.includes("mail-banner")) {
    return { width: 800, height: 2400 };
  }
  if (lower.includes("banner")) {
    return { width: 1200, height: 586 };
  }
  return { width: 1080, height: 2346 };
}
