import React from "react";
import FlashSquares from "./TestFlashingSquares";
import RightArrow from "../../assets/svgs/RightArrow";

export function OurMission() {
	return (
		<>
			<div className="relative mb-44 flex justify-center">
				<div className="flex max-w-4xl flex-col">
					<p className="mt-32 max-w-2xl font-display text-2xl">Our mission</p>
					<p className="ourmission mt-10 max-w-5xl font-display text-xl text-rainbow-animation md:text-6xl">
						We’re empowering the world’s most important organizations to transform Public Safety, protect civil liberties and ensure personal freedom.
					</p>

					<button className="mt-10 flex w-32 min-w-fit gap-3 rounded-lg p-4 text-xl">
						Learn More
						<RightArrow />
					</button>
				</div>

				<div className="absolute bottom-0 right-0">
					<FlashSquares color={"gray"} />
				</div>
			</div>
		</>
	);
}

export default OurMission;
