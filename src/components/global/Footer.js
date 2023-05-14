import React, { useContext } from "react";
import { GlobalContext } from "~/utils/context";

export default function Footer() {
	// eslint-disable-next-line no-unused-vars
	const [context] = useContext(GlobalContext);
	return <div className="flex justify-center bg-gray-100">This is the footer</div>;
}
