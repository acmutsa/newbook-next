import { FileQuestion } from "lucide-react";
export default function NoResults() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-10">
      <div className="flex flex-col items-center justify-center space-y-2">
        <FileQuestion size={100} />
        <h1 className="text-2xl">No Results Found</h1>
      </div>
    </div>
  );
}