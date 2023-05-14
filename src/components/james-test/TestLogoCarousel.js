import React from 'react'
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import ImageOne from "../../assets/svgs/CarouselImageOne"
import ImageTwo from "../../assets/svgs/CarouselImageTwo"
import ImageThree from "../../assets/svgs/CarouselImageThree"
import ImageFour from "../../assets/svgs/CarouselImageFour"
import ImageFive from '../../assets/images/coa.png';
import ImageSix from "../../assets/svgs/CarouselImageSix"


const animation = { duration: 5000, easing: (t) => t }

export default () => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			"(min-width: 400px)": {
				slides: { perView: 4, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 5, spacing: 10 },
			},
		},
		slides: { perView: 1 },
		loop: true,
		renderMode: "performance",
		drag: false,
		created(s) {
			s.moveToIdx(5, true, animation)
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation)
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation)
		},
	})
	return (
		<>
			<div className="mt-20 flex justify-center">
				<p>Trusted by global corporations</p>
			</div>
			<div ref={sliderRef} className="keen-slider mt-10 mb-40">
				<div className="keen-slider__slide flex justify-center items-center"><ImageOne/></div>
				<div className="keen-slider__slide flex justify-center items-center"><ImageTwo/></div>
				<div className="keen-slider__slide flex justify-center items-center"><ImageThree/></div>
				<div className="keen-slider__slide flex justify-center items-center"><ImageFour/></div>
				<div className="keen-slider__slide flex justify-center items-center"><Image src={ImageFive}/></div>
				
				<div className="keen-slider__slide flex justify-center items-center"><ImageSix/></div>
			</div>
		</>
	)
}