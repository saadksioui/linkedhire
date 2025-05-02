import { iconMap } from "@/utils/iconMap";

export type Category = {
  name: string;
  slug: string;
  icon: keyof typeof iconMap;
  color: string;
}