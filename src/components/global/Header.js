import React, { useContext } from "react";
import { GlobalContext } from "~/utils/context";
import Nav from '../../components/james-test/TestNav'

export default function Header() {
	// eslint-disable-next-line no-unused-vars
	const [context] = useContext(GlobalContext);
	return (
	
		<Nav/>
	
	)
	
}
