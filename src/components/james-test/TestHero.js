import React from "react";
import FlashSquares from "./TestFlashingSquares"



export function JamesComp() {

	return (
		<>
			<div className="flex justify-center">
				<FlashSquares position={'Top'} color={'gray'} />
				<div className="max-w-4xl flex flex-col items-center">

					<p className="font-display mt-32 max-w-2xl text-3xl md:text-7xl text-center">

						One platform powering better information.
					</p>
					<p className="font-display mt-10 max-w-2xl text-md md:text-xl text-center">

						Hawk empowers Public Safety agencies to make mission-critical decisions in real-time.
					</p>

					<button className="bg-yellow-300 mt-10 p-4 w-32 rounded-lg">Get started</button>

				</div>
				<FlashSquares position={'Bottom'} color={'gray'} />


			</div>
			

		</>



	);
}

export default JamesComp;
