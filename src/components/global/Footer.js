import React, { useContext } from "react";
import { GlobalContext } from "~/utils/context";
import Logo from "../../assets/svgs/logo.js";
import AwsImage from "../../assets/images/aws.png";
import Image from "next/image";
import LinkedIn from "../../assets/svgs/LinkedIn";
import Twitter from "../../assets/svgs/Twitter";
import Instagram from "../../assets/svgs/Instagram";
import RightArrow from "../../assets/svgs/RightArrow";

export default function Footer() {
	// eslint-disable-next-line no-unused-vars
	const [context] = useContext(GlobalContext);
	return (
		<div className="">
			<div>
				<Logo />
			</div>
			<div className="mt-8 grid grid-cols-1 text-base sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
				<div className="mt-8 flex flex-col md:mt-3">
					<span className="mt-3 flex items-center gap-2">
						Law Enforcement
						<RightArrow />
					</span>
					<span className="mt-2 md:mt-5 font-light">Investigations</span>
					<span className="mt-2 md:mt-5 font-light">Field Services and Patrol</span>
					<span className="mt-2 md:mt-5 font-light">Real-Time Crime Center</span>
					<span className="mt-2 md:mt-5 font-light">Real-Time Crime Center</span>
					<span className="mt-2 md:mt-5 font-light">Information Technology</span>
				</div>
				<div className="mt-8 flex flex-col md:mt-3">
					<span className="mt-3 flex items-center gap-2 ">
						Emergency Management
						<RightArrow />
					</span>
					<span className="mt-2 md:mt-5 flex items-center gap-2 ">
						Smart Cities
						<RightArrow />
					</span>
					<span className="mt-2 md:mt-5 flex items-center gap-2 ">
						Event Management
						<RightArrow />
					</span>
				</div>
				<div className="mt-8 flex flex-col md:mt-3">
					<span className="mt-3">Platform</span>
					<span className="mt-2 md:mt-5 font-light">Overview</span>
					<span className="mt-2 md:mt-5 font-light">Security</span>
					<span className="mt-2 md:mt-5 font-light">Privacy and Civil Liberties</span>
					<span className="mt-2 md:mt-5 font-light">Implementation</span>
				</div>
				<div className="mt-8 flex flex-col md:mt-3">
					<span className="mt-3">Resources</span>
					<span className="mt-2 md:mt-5 font-light">Case Studies</span>
					<span className="mt-2 md:mt-5 font-light">Insights</span>
					<span className="mt-2 md:mt-5 font-light">Blog</span>
					<span className="mt-2 md:mt-5 font-light">Events</span>
				</div>
			</div>
			<div className="mt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
				<div className="mt-8 flex flex-col md:mt-3">
					<span className="mt-3">Company</span>
					<span className="mt-2 md:mt-5 font-light">About</span>
					<span className="mt-2 md:mt-5 font-light">Careers</span>
					<span className="mt-2 md:mt-5 font-light">Contact</span>
				</div>
				<div className="mt-8 flex flex-col md:mt-3">
					<span className="mt-3">Support</span>
					<span className="mt-2 md:mt-5 font-light">Help Center</span>
					<span className="mt-2 md:mt-5 font-light">System Status</span>
					<span className="mt-2 md:mt-5 font-light">Release Notes</span>
				</div>
				<div className="mt-8 flex flex-col md:mt-3">
					<span className="mt-3">Social</span>
					<span className="mt-2 md:mt-5 flex items-center gap-2 font-light">
						<LinkedIn />
						LinkedIn
					</span>
					<span className="mt-2 md:mt-5 flex items-center gap-2 font-light">
						<Twitter />
						Twitter
					</span>
					<span className="mt-2 md:mt-5 flex items-center gap-2 font-light">
						<Instagram />
						Instagram
					</span>
				</div>
				<div className="mt-8 flex flex-col md:mt-3">
					<span className="mt-3">Legal</span>
					<span className="mt-2 md:mt-5 font-light">Terms of Use</span>
					<span className="mt-2 md:mt-5 font-light">Cookie Policy</span>
					<span className="mt-2 md:mt-5 font-light">Privacy Policy</span>
				</div>
			</div>
			<div className="mt-28 flex justify-between border-t-2 border-gray-300">
				<div className="mt-2 md:mt-5 mb-5 flex w-screen justify-between">
					<div className="text-xs mt-7 font-light">© 2022 Hawk. All rights reserved</div>
					<div className="mr-12">
						<Image src={AwsImage} />
					</div>
				</div>
			</div>
		</div>
	);
}
