import { getUser } from "db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import OnboardingForm from "@/components/onboarding/OnboardingForm";
export default async function OnboardingPage() {
	const currUser = await currentUser();
	if (!currUser || !currUser.id) redirect("/sign-in");
	// protected by the clerkMiddleware so we know this id will exist
	const user = await getUser(currUser.id);

	if (user) {
		return redirect("/");
	}

	return (
		<div className="h-screen w-screen">
			<OnboardingForm
				firstName={currUser.firstName}
				lastName={currUser.lastName}
				email={currUser.emailAddresses[0].emailAddress}
			/>
		</div>
	);
}
