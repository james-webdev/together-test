import React from "react";
import { slide as Menu } from "react-burger-menu";


export default (props) => {
	return (
		<Menu right {...props}>
			<a className="menu-item p-4" href="/">
				<div className="flex items-center">

					<p className="font-bold">Solutions</p>
					
				</div>

				<hr className="mt-4" />
			</a>

			<a className="menu-item p-3" href="/about">
				<div className="flex items-center mr-20">
					
					<p className="font-bold">Platform</p>
					
				</div>
				<hr className="mt-4" />
			</a>

			<a className="menu-item p-3" href="/services">
				<div className="flex items-center">
					
					<p className="font-bold">Resources</p>
					
				</div>
				<hr className="mt-4" />
			</a>
			<a className="menu-item p-3" href="/services">
				<div className="flex items-center">
					
					<p className="font-bold">Company</p>
					
				</div>
				<hr className="mt-4" />
			</a>
			<div className="p-1 border border-black px-6 py-3 m-1 sm:m-2">
          Request a Demo
        </div>
			<div className="flexImp justify-around items-center w-full mt-60">
				<div>

				</div>
				<div>
				</div>
			</div>
		</Menu>
	);
};
