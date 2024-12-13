import { Star } from "lucide-react";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import NewBookScoreDial from "./NewBookScoreDial";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

interface CourseRatingProps {
	id: string;
	content: string;
	createdAt: Date;
	ratingValue: number;
	title: string;
}
export function CourseRating({
	course: { id, title, content, createdAt, ratingValue },
}: {
	course: CourseRatingProps;
}) {
	return (
		<Card className="min-w-[32ch] max-w-[64ch] transition-shadow duration-200 hover:shadow-xl">
			<CardHeader>
				<div className="flex items-center justify-between">
					<Link href={`/myratings/${id}`}>
						<CardTitle>{title}</CardTitle>
					</Link>
					<span
						className="inline-flex items-center text-amber-400"
						aria-hidden="true"
					>
						<NewBookScoreDial
							score={ratingValue}
						></NewBookScoreDial>
					</span>
				</div>
			</CardHeader>
			<CardContent>
				<p>{content}</p>
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-center justify-end">
					{/* <Link href={`/myratings/${id}/edit`}>
						<Button variant="outline">Edit</Button>
					</Link> */}
					<p className="text-sm italic text-gray-500">
						{createdAt.toDateString()}
					</p>
				</div>
			</CardFooter>
		</Card>
	);
}

interface AdvisorRatingProps {
	id: number;
	content: string | null;
	createdAt: Date;
	ratingValue: number;
	advisor: {
		name: string;
	};
}
export function AdvisorRating({
	advisor: {
		id,
		content,
		createdAt,
		ratingValue,
		advisor: { name },
	},
}: {
	advisor: AdvisorRatingProps;
}) {
	return (
		<Card className="min-w-[32ch] max-w-[64ch] transition-shadow duration-200 hover:shadow-xl">
			<CardHeader>
				<div className="flex items-center justify-between">
					<Link href={`/myratings/${id}`}>
						<CardTitle>{name}</CardTitle>
					</Link>
					<span
						className="inline-flex items-center text-utsa-blue"
						aria-hidden="true"
					>
						{Array.from({
							length: Math.floor(ratingValue),
						}).map((i, _) => (
							<StarFilledIcon width={24} />
						))}
						{Array.from({
							length: Math.ceil(5 - ratingValue),
						}).map((i, _) => (
							<StarIcon width={24} />
						))}
					</span>
				</div>
			</CardHeader>
			<CardContent>
				<p>{content}</p>
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-center justify-end">
					{/* <Link href={`/myratings/${id}/edit`}>
						<Button variant="outline">Edit</Button>
					</Link> */}
					<p className="text-sm italic text-gray-500">
						{createdAt.toDateString()}
					</p>
				</div>
			</CardFooter>
		</Card>
	);
}
