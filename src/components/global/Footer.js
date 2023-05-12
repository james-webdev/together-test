import React, { useContext } from "react";
import { GlobalContext } from "~/utils/context";

export default function Footer() {
	// eslint-disable-next-line no-unused-vars
	const [context] = useContext(GlobalContext);
	return <div>This is the footer</div>;
}
