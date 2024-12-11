import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<SignIn
				signUpFallbackRedirectUrl={"/onboarding"}
				fallbackRedirectUrl={"/onboarding"}
			/>
		</div>
	);
}

export const runtime = "edge";