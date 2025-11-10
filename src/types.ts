export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  images: string[]; // Cloudinary URL’leri
  location: string;
}
