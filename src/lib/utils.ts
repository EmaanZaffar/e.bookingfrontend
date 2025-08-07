// import { clsx , type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }


import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";
 
export function cn(...classes: ClassNameValue[]) {
  return twMerge(clsx(classes));
}