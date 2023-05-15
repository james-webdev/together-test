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
			<div className="mt-8 md:mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-base">
				<div className="flex mt-8 md:mt-3 flex-col">
					<span className="mt-3 flex items-center gap-2">
						Law Enforcement
						<RightArrow />
					</span>
					<span className="mt-3 font-light">Investigations</span>
					<span className="mt-3 font-light">Field Services and Patrol</span>
					<span className="mt-3 font-light">Real-Time Crime Center</span>
					<span className="mt-3 font-light">Real-Time Crime Center</span>
					<span className="mt-3 font-light">Information Technology</span>
				</div>
				<div className="flex mt-8 md:mt-3 flex-col">
					<span className="mt-3 flex items-center gap-2 ">
						Emergency Management
						<RightArrow />
					</span>
					<span className="mt-3 flex items-center gap-2 ">
						Smart Cities
						<RightArrow />
					</span>
					<span className="mt-3 flex items-center gap-2 ">
						Event Management
						<RightArrow />
					</span>
				</div>
				<div className="flex mt-8 md:mt-3 flex-col">
					<span className="mt-3">Platform</span>
					<span className="mt-3 font-light">Overview</span>
					<span className="mt-3 font-light">Security</span>
					<span className="mt-3 font-light">Privacy and Civil Liberties</span>
					<span className="mt-3 font-light">Implementation</span>
				</div>
				<div className="flex mt-8 md:mt-3 flex-col">
					<span className="mt-3">Resources</span>
					<span className="mt-3 font-light">Case Studies</span>
					<span className="mt-3 font-light">Insights</span>
					<span className="mt-3 font-light">Blog</span>
					<span className="mt-3 font-light">Events</span>
				</div>
			</div>
			<div className="mt-8 md:mt-3 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				<div className="flex mt-8 md:mt-3 flex-col">
					<span className="mt-3">Company</span>
					<span className="mt-3 font-light">About</span>
					<span className="mt-3 font-light">Careers</span>
					<span className="mt-3 font-light">Contact</span>
				</div>
				<div className="flex mt-8 md:mt-3 flex-col">
					<span className="mt-3">Support</span>
					<span className="mt-3 font-light">Help Center</span>
					<span className="mt-3 font-light">System Status</span>
					<span className="mt-3 font-light">Release Notes</span>
				</div>
				<div className="flex mt-8 md:mt-3 flex-col">
					<span className="mt-3">Social</span>
					<span className="mt-3 flex items-center gap-2 font-light">
						<LinkedIn />
						LinkedIn
					</span>
					<span className="mt-3 flex items-center gap-2 font-light">
						<Twitter />
						Twitter
					</span>
					<span className="mt-3 flex items-center gap-2 font-light">
						<Instagram />
						Instagram
					</span>
				</div>
				<div className="flex mt-8 md:mt-3 flex-col">
					<span className="mt-3">Legal</span>
					<span className="mt-3 font-light">Terms of Use</span>
					<span className="mt-3 font-light">Cookie Policy</span>
					<span className="mt-3 font-light">Privacy Policy</span>
				</div>
			</div>
			<div className="flex justify-between border-t-2 border-gray-300">
				<div className="mt-5 flex w-screen justify-between">
					<div className="font-xs font-light">© 2022 Hawk. All rights reserved</div>
					<div>
						<Image src={AwsImage} />
					</div>
				</div>
			</div>
		</div>
	);
}
