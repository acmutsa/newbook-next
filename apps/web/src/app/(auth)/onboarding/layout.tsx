import { Noto_Sans, EB_Garamond } from "next/font/google";
const noto = Noto_Sans({
	variable: "--font-notosans",
	subsets: ["latin"],
});

const eb = EB_Garamond({
	variable: "--font-eb",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${noto.variable} ${eb.variable} bg-offwhite font-noto antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
