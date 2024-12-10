import { redirect } from "next/navigation";
import { SearchParamsType } from "@/lib/types";
import { Suspense } from "react";
import CourseView from "@/components/search/CourseView";
import BasicLoader from "@/components/shared/BasicLoader";
import { JSX } from "react";
import { FileQuestion } from "lucide-react";
import Link from "next/link";
import { capitalizeWord } from "@/lib/utils";

export default async function Page(props: { searchParams?: SearchParamsType }) {
	const searchParams = await props.searchParams;
	if (!(searchParams && searchParams.q && searchParams.q.length > 0)) {
		return redirect("/");
	}
	const searchType = searchParams.searchType || "";
	let RenderElement: JSX.Element | null = <></>;
	switch (searchType) {
		case "":
			// return all of these in a div
			RenderElement =  null;
			break;
		case "courses":
			RenderElement = <CourseView searchParams={searchParams} />
			break;
		case "professors":
			RenderElement=  null; // placeholder
		case "advisors":
			RenderElement =  null; // placeholder
			break;
		default:
			RenderElement = null;
			break;
	}
	// We can likely have a general view component 
	return (
		<>
			{RenderElement ? (
				<div className="mx-auto flex min-h-screen w-screen max-w-4xl flex-col pt-[25vh] text-utsa-blue">
					<h1 className="font-eb text-8xl">Results</h1>
					<Link href={"/"} className="mb-20">
						<p className="underline">Return To Search</p>
					</Link>
					<Suspense fallback={<BasicLoader />}>
						{RenderElement}
					</Suspense>
				</div>
			) : (
				<TypeNotFound />
			)}
		</>
	);
}

function TypeNotFound() {
	return (
		<div className="flex min-h-screen w-screen flex-col items-center justify-center space-y-8">
			<div className="flex flex-col items-center justify-center space-y-2">
				<FileQuestion size={100} />
				<h1 className="text-2xl">Unknown Search Type</h1>
			</div>
			<Link className="underline" href={"/"}>
				Return To Search{" "}
			</Link>
		</div>
	);
}