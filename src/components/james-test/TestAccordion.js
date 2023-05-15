import React, { useState } from "react";



const AccordionTwo = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const items = [
		{
			title: "Visualize",
			heading: "Never miss a thing",
			content: "Integrate all your data into one platform for a unified view of any disaster — with every detail accessible to everyone who needs it.",
			image: "https://i.postimg.cc/9QwbCBbD/Group-63461.png"
		},
		{
			title: "Collaborate",
			heading: "Access real-time information.",
			content: "Ensure first responders are on the same page with real-time alerts and instant access to information. Eliminate silos and work effectively as a team.",
			image:
				"https://i.postimg.cc/VLrnCkCT/SDTwo.png"
		},
		{
			title: "Respond",
			heading: "Respond faster and more efficiently",
			content: "Develop smarter strategies and make better decisions. Save lives and protect communities.",
			image:
				"https://i.postimg.cc/sxtBc5hL/SDThree.png"
		}
	];

	const images = [

	]

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedItems = items.map((item, index) => {
		const active = index === activeIndex ? "active" : "";

		return (
			<div className="border-t-2 mb-4" key={item.title}>
				<div className={`title ${active} cursor-pointer font-thin text-slate-600 text-xl mt-7`} onClick={() => onTitleClick(index)}>
					{item.title}
				</div>
				<div className={`heading ${active} text-5xl mt-8 mb-10 font-display`}>
					<h2>{item.heading}</h2>
				</div>
				<div className={`content ${active} text-slate-400 text-xl`}>
					<p>{item.content}</p>
				</div>
			</div>
		);
	});

	return (
		<div className="grid lg:grid-cols-2 mb-4 lg:mb-28">
			<div className="">
				<img
					className="object-contain"
					src={`${items[activeIndex].image}`}
					alt="img"
					style={{width: '620', height: '784px'}}
					layout="fill"
		/>
			</div>
			<div className="ml-0 lg:ml-32">{renderedItems}</div>
		</div>
	);
};

export default AccordionTwo;
