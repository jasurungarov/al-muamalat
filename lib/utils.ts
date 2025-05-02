import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function localization(lng: string) {
// 	if (lng === 'en') return enUS
// 	if (lng === 'ru') return ruRU
// 	if (lng === 'tr') return trTR
// 	if (lng === 'uz') return uzUZ
// }

export function getCurrentLng(lng: string) {
	if (lng === 'en') return 'English'
	if (lng === 'ru') return 'Русский'
	if (lng === 'tr') return 'Türkçe'
	if (lng === 'uz') return 'O‘zbek'
}