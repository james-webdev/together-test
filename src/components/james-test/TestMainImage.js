import React from "react";
import Image from 'next/image';
import Analysis from '../../assets/images/analysis.png';
import CalloutPublic from "~/assets/svgs/CalloutPublic";
import CalloutCAD from "~/assets/svgs/CalloutCad";
import CalloutVehicle from "~/assets/svgs/CalloutVehicle";




export function MainImage() {

	return (


		<div className="mt-24 relative flex justify-center">

			
			<CalloutCAD />
			<CalloutPublic />
			<CalloutVehicle />

			<Image src={Analysis} />

			<span className="hidden md:absolute bg-white h-6 w-60 top-0 right-0"></span>
			<span className="hidden md:absolute bg-white h-12 w-48 bottom-0 left-0"></span>


		</div>



	);
}

export default MainImage;
