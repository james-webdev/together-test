import FlashSquares from "./TestFlashingSquares";

const AchieveBanner = () => {


	return (
		<div className="achieve relative mb-20 flex items-center justify-center">
			<div>
				<div className="flex justify-center">
					<p className="max-w-5xl text-center text-white font-display text-3xl md:text-7xl">
						Achieve breakthrough moments.
					</p>
				</div>
				<div className="flex justify-center">
					<button className="bg-yellow-300 mt-10 p-4 w-32 rounded-lg pushable"><span className="front">Get started </span></button>
					
				</div>
			</div>
			<div className="absolute bottom-0 left-0">

				<FlashSquares className="absolute bottom-10 left-44" color={"lightgreen"} />
			</div>

			<div className="absolute top-20 right-10">

				<FlashSquares color={"lightgreen"} />
			</div>
			<span className="absolute bg-white h-10 w-40 top-0 right-0"></span>
			<span className="absolute bg-white h-12 w-60 bottom-0 right-0"></span>
			<span className="absolute bg-white h-12 w-60 top-0 left-0"></span>
		</div>
	)
}

export default AchieveBanner;