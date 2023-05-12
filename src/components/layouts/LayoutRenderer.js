import React from "react";
import { LandingPage } from "~/components/layouts/LandingPage";
import { Section } from "~/components/layouts/Section";

export function LayoutRenderer({ sections, ID }) {
	if (!sections) return null;

	return sections?.map((section, i) => (
		<React.Fragment key={`${ID + section.acf_fc_layout + i}`}>
			<div>
				<span>Hello World</span>
			</div>
		</React.Fragment>
	));
}

export default LayoutRenderer;
