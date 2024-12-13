import Image from "next/image";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
	return (
		<div className="mx-auto w-screen max-w-7xl pt-20 text-utsa-blue">
			<div className="flex flex-col py-8">
				<h1 className="font-eb text-6xl font-black">About Us</h1>
			</div>
			<div className="grid grid-cols-3 grid-rows-2 gap-6">
				<p className="col-span-3 col-start-1 row-start-1 md:col-span-1">
					NewBook was a platform designed by UTSA students, for UTSA
					students!<br></br>
					<br></br> Our project goal was to make the process of
					exploring and evaluating UTSA courses, faculty, and advisors
					simple, insightful, and student focused. Whether you’re
					planning your schedule or seeking advice, NewBook helps you
					make informed decisions with real reviews and ratings from
					your peers.
				</p>
				<p className="col-span-3 row-start-2 md:col-span-1">
					This project was created in Fall 2024 by members of UTSA’s
					Association for Computing Machinery (ACM). As a
					collaborative effort of passionate students, we aimed to
					address a common challenge faced by our fellow
					Roadrunners—navigating academic options with limited or
					outdated information.<br></br>
					<br></br>
					<b>
						Together, we’re building a stronger, more informed UTSA
						community.
					</b>
				</p>
				<Image
					src="/img/sp1.jpg"
					width={650}
					height={250}
					className="col-span-2 col-start-2 row-span-2 hidden md:block"
					alt="Picture of UTSA's SP1 Building"
				/>
			</div>
			<div className="items-left flex flex-col py-6">
				<h1 className="font-eb text-6xl font-black text-utsa-blue">
					FAQ
				</h1>
			</div>
			<div className="">
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>
							Are you affiliated with UTSA?
						</AccordionTrigger>
						<AccordionContent>
							No. This project has no affiliation with UTSA.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>
							How are the reviews and ratings on NewBook
							collected?
						</AccordionTrigger>
						<AccordionContent>
							All reviews and ratings are submitted by UTSA
							students. We aim to create a safe and respectful
							space for sharing honest experiences.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>
							Is my information anonymous when I submit a review?
						</AccordionTrigger>
						<AccordionContent>
							Yes, all submissions are anonymous to ensure
							students feel comfortable providing honest feedback.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>
							Is NewBook free to use?
						</AccordionTrigger>
						<AccordionContent>
							Yes, NewBook is completely free for all users.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
