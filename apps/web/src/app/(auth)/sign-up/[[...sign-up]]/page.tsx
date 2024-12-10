import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<SignUp
				signInFallbackRedirectUrl={"/"}
				fallbackRedirectUrl={"/onboarding"}
			/>
		</div>
	);
}

export const runtime = "edge";
