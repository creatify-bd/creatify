export type Product = {
  slug: string
  title: string
  priceBdt: number
  driveLink: string
}

export const BKASH_NUMBER = "01521769847"

export const PRODUCTS: Product[] = [
  {
    slug: "tshirt-designs",
    title: "1 Lakh+ T-shirt Designs",
    priceBdt: 299,
    driveLink: "https://drive.google.com/drive/folders/1LtTaLLMPqvirgimioVZkzpD2exMPdq8t?usp=drive_link",
  },
  {
    slug: "courses",
    title: "1000+ Premium Courses",
    priceBdt: 199,
    driveLink: "https://drive.google.com/drive/folders/1v8foisGANPVRQZl_kx0QOe3cAWnNyEm4?usp=drive_link",
  },
  {
    slug: "graphics-package",
    title: "Graphics Design Package",
    priceBdt: 399,
    driveLink: "https://drive.google.com/drive/folders/1_lassRwUWQktTVYcqFJVgMxAZlN79rlS?usp=drive_link",
  },
  {
    slug: "study-notes",
    title: "Class 6 to Admission Notes",
    priceBdt: 99,
    driveLink: "https://drive.google.com/drive/folders/1ufOXt3HVYnbdDI9carTiEQ8HPdviGlyK?usp=drive_link",
  },
  {
    slug: "digital-360",
    title: "Digital Products 360",
    priceBdt: 499,
    driveLink: "https://drive.google.com/drive/folders/1KBqZDJvhY_GEfWIaKVQRJ93xkqGcn5HB?usp=drive_link",
  },
]

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}
