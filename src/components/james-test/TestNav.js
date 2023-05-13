import React from "react";
import SideBar from "../../components/james-test/TestSidebar";
import Logo from "../../assets/images/logo.js"
import Link from 'next/link';
import ArrowDown from "~/assets/images/arrowDropDown";



const Nav = () => {
	return (
		<div className="grid grid-cols-3 mb-10">
			<div>
				<div className="h-14 flex" id="App">
					<div className="mt-8 hidden md:block">
						<Logo />
					</div>
					<div className="pt-2 w-20 mt-5 pl-5 md:hidden">
						<Logo />
					</div>
					<div className="lg:hidden">
						<SideBar
							className=""
							pageWrapId={"page-wrap"}
							outerContainerId={"App"}
						/>
					</div>
				</div>
			</div>

			<div className="mt-2 hidden mr-20 lg:flex justify-center items-center">
				<div className="flex justify-center items-center p-1 gap-10 text-xs sm:p-2 m-1 sm:m-2">
					<a href="/" className="ml-1 flex text-xs sm:text-base">Solutions
						<ArrowDown className="overflow-visible"/>
					</a>
					<a href="/" className="ml-1 flex text-xs sm:text-base">Platform<ArrowDown className="overflow-visible"/></a>
					<a href="/" className="ml-1 flex text-xs sm:text-base">Resources<ArrowDown className="overflow-visible"/></a>
					<a href="/" className="ml-1 flex text-xs sm:text-base">Company<ArrowDown className="overflow-visible"/></a>
				</div>
			</div>
			<div className="mt-2 hidden mr-20 lg:flex justify-center items-center">
				<div className="flex justify-center items-center p-1 text-xs sm:p-2 m-1 sm:m-2">
					<a href="/" className="ml-1 text-xs sm:text-base">Login</a>
				</div>
				<div className="p-1 border border-black px-6 py-3  text-xs m-1 sm:m-2">
					<a href="/" className="ml-1 text-xs sm:text-base">Request a Demo</a>

				</div>
			</div>
		</div>
	);
};

export default Nav;
