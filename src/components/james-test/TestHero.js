import React from "react";
import FlashSquares from "./TestFlashingSquares";
import { motion } from "framer-motion";

export function Hero() {
	const title = "One platform powering better information.";

	const sentence = {
		hidden: {
		  opacity: 1,
		},
		visible: {
		  transition: {
			opacity: 1,
			delay: .18,
			staggerChildren: 0.05
		  }
		}
	  }
	
	  const letter = {
		  hidden: {
			opacity: 0,
			// y: 100
		  },
		  visible: {
			// y: 0,
			opacity: 1,
		  }
	  }

	return (
		<>
			<div className="flex justify-center">
				<FlashSquares position={"Top"} color={"gray"} />
				<div className="flex max-w-4xl flex-col items-center">
				<motion.div className="mt-10 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={sentence}>
                    {title.split("").map((char, index) => {
                      return (
                        <motion.span className="mt-32 max-w-2xl text-center font-display text-3xl md:text-7xl" key={char + "-" + index} variants={letter}>{ char }</motion.span>
                      )
                    })}
                  </motion.div>
					<p className="text-md mt-10 max-w-2xl text-center font-display md:text-xl">
						Hawk empowers Public Safety agencies to make mission-critical decisions in real-time.
					</p>

					<button className="mt-10 w-32 rounded-lg bg-yellow-300 p-4">Get started</button>
				</div>
				<FlashSquares position={"Bottom"} color={"gray"} />
			</div>
		</>
	);
}

export default Hero;
