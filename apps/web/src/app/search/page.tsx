import { redirect } from "next/navigation";

type PageProps = {
	params: { slug: string };
	searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Page({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	if (
		!searchParams ||
		!searchParams.q ||
		typeof searchParams.q !== "string" ||
		searchParams.q.length == 0
	) {
		return redirect("/");
	}
	return (
		<div className="flex min-h-screen w-screen flex-col items-center justify-center">
			<p>got {searchParams?.q}</p>
		</div>
	);
}
