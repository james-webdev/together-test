import React from "react";
import Image from 'next/image';
import Analysis from '../../assets/images/analysis.png';
import CalloutPublic from "~/assets/svgs/CalloutPublic";
import CalloutCAD from "~/assets/svgs/CalloutCad";
import CalloutVehicle from "~/assets/svgs/CalloutVehicle";




export function MainImage() {

	return (


		<div className="mt-20 relative flex justfiy-center">

			<CalloutPublic />
			<CalloutCAD />
			<CalloutVehicle />

			<Image src={Analysis} />


		</div>



	);
}

export default MainImage;
