import Image from "next/image";

export default function Page() {
	return (
		<div className="mx-auto w-screen max-w-7xl px-5 pt-20 text-utsa-blue">
			<div className="items-left flex flex-col py-8">
				<h1 className="font-eb text-6xl font-black text-utsa-blue">
					About Us
				</h1>
			</div>
			<div className="grid grid-cols-3 grid-rows-2 gap-10">
				<p className="col-span-3 col-start-1 row-start-1 md:col-span-1">
					Lorem ipsum odor amet, consectetuer adipiscing elit. Mi a
					mus arcu ultricies quisque tincidunt. Sagittis quis
					consequat eget justo habitasse. Fermentum massa egestas
					consequat placerat; nulla himenaeos pretium. Pharetra
					pulvinar augue dolor imperdiet sed suspendisse finibus velit
					duis. Dictum aptent lacinia convallis commodo libero etiam.
					Ante interdum rhoncus eu gravida consequat auctor. Sociosqu
					natoque diam erat justo lacus cubilia aliquet.
				</p>
				<p className="col-span-3 row-start-2 md:col-span-1">
					Pulvinar aptent euismod tortor penatibus velit tellus
					sollicitudin ac nibh. Primis sagittis cubilia suspendisse
					interdum senectus ultricies quisque urna semper. Dui ad
					finibus auctor varius maximus arcu curae. Taciti ex platea
					sodales venenatis purus blandit? Luctus sollicitudin ligula
					placerat gravida fames arcu quis. Orci cursus in at
					pellentesque etiam ligula at? Dictum laoreet rutrum a etiam
					pharetra laoreet sociosqu netus.
				</p>
				<Image
					src="/sp1.jpg"
					width={650}
					height={250}
					className="col-span-2 col-start-2 row-span-2 hidden md:block"
					alt="Picture of UTSA's SP1 Building"
				/>
			</div>
			<div className="items-left flex flex-col py-8">
				<h1 className="font-eb text-6xl font-black text-utsa-blue">
					FAQ
				</h1>
			</div>
		</div>
	);
}
