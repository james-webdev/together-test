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
				<button style={{backgroundColor: "#F1F152"}} className="mt-10 w-32 bg-yellow-300 p-4">Get started</button>
					
				</div>
			</div>
			<div className="absolute bottom-0 left-0">

				<FlashSquares className="absolute bottom-10 left-44" color={"#4FF2A4"} />
			</div>

			<div className="absolute top-20 right-10">

				<FlashSquares color={"#4FF2A4"} />
			</div>
			<span className="absolute bg-white h-8 w-48 top-0 right-0"></span>
			<span className="absolute bg-white h-8 w-64 bottom-0 left-0"></span>
			<span className="absolute bg-white h-32 w-32 top-0 left-0"></span>
		</div>
	)
}

export default AchieveBanner;