import { getUser } from "db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
export default async function OnboardingPage(){
  const { userId } = await auth();
  // protected by the clerkMiddleware so we know this id will exist
  const currentUser = await getUser(userId!);

  if (currentUser){
    return redirect("/");
  }

  return (
    <div>
      <h1>Onboarding</h1>
    </div>
  )
}