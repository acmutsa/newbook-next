import Link from "next/link";

export default function GuidelinesPage() {
	return (
		<div className="mx-auto grid h-full w-screen max-w-7xl pt-20">
			<div className="flex flex-col">
				<h1 className="py-8 font-eb text-6xl font-black text-utsa-blue">
					Community Guidelines
				</h1>

				<h4 className="font-black text-utsa-blue">
					Treat Everyone With Respect
				</h4>
				<p className="mb-4 pt-2">
					Please treat everyone with respect. This website may be
					utilized for anonymous reporting of professors and advisors,
					however, we must address everyone politely and respectfully.
				</p>

				<h4 className="font-black text-utsa-blue">
					Constructive Criticism and Actionable Feedback
				</h4>
				<p className="mb-4 pt-2">
					NewBook's goal is to provide feedback and constructive
					criticism to others. Please avoid insults, attacks, or
					derogatory remarks. Please focus on including actionable
					feedback and avoid vague comments.
				</p>

				<h4 className="font-black text-utsa-blue">Focus on Content</h4>
				<p className="mb-4 pt-2">
					Focus on content rather than the person themself!
				</p>

				<h4 className="font-black text-utsa-blue">Tone and Language</h4>
				<p className="mb-4 pt-2">
					Be mindful of keeping a respecetful tone and language.
				</p>

				<h4 className="font-black text-utsa-blue">
					Respect Privacy and Boundaries
				</h4>
				<p className="mb-4 pt-2">
					Please avoid sharing personal information without consent.
				</p>

				<h4 className="font-black text-utsa-blue">Our Team</h4>
				<p className="mb-4 pt-2">
					Our team will aim to moderate reports and ensure that our
					community continues to stay positive and encouraging to
					everyone on our website.
				</p>
			</div>
		</div>
	);
}
