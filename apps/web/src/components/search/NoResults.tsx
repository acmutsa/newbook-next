import { FileQuestion } from "lucide-react";
export default function NoResults({ searchValue }: { searchValue: string }) {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center space-y-10">
			<h1 className="text-2xl">
				{`No Results Found for '${searchValue}'`}{" "}
			</h1>
		</div>
	);
}
