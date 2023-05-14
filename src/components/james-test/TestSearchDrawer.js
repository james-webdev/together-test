import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image';
import SDOne from '../../assets/images/SDOne.png';
import SDTwo from '../../assets/images/SDTwo.png';
import SDThree from '../../assets/images/SDThree.png';



export default () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className='mb-96'>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide h-full grid grid-cols-2 justify-center items-center">
		  <Image className='object-contain' src={SDOne} />
		  <div className='flex flex-col items-center'><p>Visualize</p>
		  <h1 className="text-5xl font-display">Never miss a thing</h1>
		  <p>Collaborate</p>
		  <p>Repsond</p></div>
		  </div>
          <div className="keen-slider__slide h-full grid grid-cols-2 justify-center items-center">
		  <Image className='object-contain' src={SDTwo} />
		  <div className='flex flex-col items-center'><p>Visualize</p>
		  <h1 className="text-5xl font-display">Never miss a thing</h1>
		  <p>Collaborate</p>
		  <p>Repsond</p></div>
		  </div>
          <div className="keen-slider__slide h-full grid grid-cols-2 justify-center items-center">
		  <Image className='object-contain' src={SDThree} />
		  <div className='flex flex-col items-center'><p>Visualize</p>
		  <h1 className="text-5xl font-display">Never miss a thing</h1>
		  <p>Collaborate</p>
		  <p>Repsond</p></div>
		  </div>
        </div>
       
      </div>
      {loaded && instanceRef.current && (
        <div className="dots mt-20">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}
