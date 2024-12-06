"use client";
import { createUserAction } from "@/app/actions/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { CircleCheckBig, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { CreateUserSchemaType } from "db/types";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { createUserSchema } from "db/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

export default function OnboardingForm({
	firstName,
	lastName,
	email,
}: {
	firstName: string | null;
	lastName: string | null;
	email: string;
}) {
	const [hasSuccess, setHasSuccess] = useState(false);

	const { execute: runCreateUserAction, isExecuting } = useAction(
		createUserAction,
		{
			onSuccess: () => {
				setHasSuccess(true);
			},
			onError: () => {
				alert(
					"Something went wrong while registering. Please try again later",
				);
			},
		},
	);

	const form = useForm<CreateUserSchemaType>({
		resolver: zodResolver(createUserSchema),
		defaultValues: {
			email,
			firstname: firstName ?? "",
			lastname: lastName ?? "",
			username: "",
		},
	});

	function onSubmit(values: CreateUserSchemaType) {
		console.log(values);
		runCreateUserAction(values);
	}

	return (
		<div className="flex h-full w-full flex-col items-center justify-center space-y-10">
			{isExecuting ? (
				<CreateingUserState />
			) : hasSuccess ? (
				<SuccessState />
			) : (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 rounded-lg"
					>
						<div className="flex w-full flex-col text-utsa-blue">
							<h1 className="text-5xl font-black">Welcome!</h1>
							<h3>
								Please fill out the following information to
								complete registration.
							</h3>
						</div>
						<div className="flex flex-col space-y-8 rounded-lg border border-utsa-blue p-5 text-utsa-blue">
							<div className="flex flex-row justify-between gap-x-4 text-utsa-blue">
								<FormField
									control={form.control}
									name="firstname"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First Name</FormLabel>
											<FormControl>
												<Input
													placeholder="Jane"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastname"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last Name</FormLabel>
											<FormControl>
												<Input
													placeholder="Doe"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input {...field} disabled />
										</FormControl>
										<FormDescription>
											This value cannot be changed.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input
												placeholder="iluvSeniorDesign"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											This is your public display name.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								className="max-w-[30%] bg-utsa-blue"
								type="submit"
								disabled={isExecuting}
							>
								Submit
							</Button>
						</div>
					</form>
				</Form>
			)}
		</div>
	);
}

function CreateingUserState() {
	return (
		<div className="flex flex-col items-center justify-center space-y-10">
			<LoaderCircle className="animate-spin" size={60} />
			<h1 className="text-2xl font-semibold 2xl:text-3xl">
				Creating Registration...
			</h1>
		</div>
	);
}

function SuccessState() {
	const [redirectCount, setRedirectCount] = useState(3);
	const { push } = useRouter();
	useEffect(() => {
		if (redirectCount === 0) {
			push("/");
		}
	}, [redirectCount]);
	setInterval(() => {
		setRedirectCount(Math.max(0, redirectCount - 1));
	}, 1000);
	return (
		<div className="flex flex-col items-center justify-center space-y-10">
			<CircleCheckBig size={60} color="green" />
			<h1 className="text-2xl font-semibold 2xl:text-3xl">{`Sucess Creating Registration. Redirecting in ${redirectCount}...`}</h1>
		</div>
	);
}
