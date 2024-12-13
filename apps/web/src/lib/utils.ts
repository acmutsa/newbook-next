import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function titleCase(str: string): string {
	const minorWords = new Set([
		"a",
		"an",
		"and",
		"as",
		"at",
		"but",
		"by",
		"for",
		"in",
		"of",
		"on",
		"or",
		"the",
		"to",
		"with",
	]);

	const words = str.toLowerCase().split(/\s+/);
	if (words.length === 0 || (words.length === 1 && words[0] === "")) {
		return str;
	}

	words[0] = capitalizeWord(words[0]);

	for (let i = 1; i < words.length; i++) {
		words[i] = minorWords.has(words[i])
			? words[i]
			: capitalizeWord(words[i]);
	}

	return words.join(" ");
}

export function capitalizeWord(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1);
}
