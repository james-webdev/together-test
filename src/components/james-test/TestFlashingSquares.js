import React from "react";



export function FlashSquares({ color, position }) {


	return (
		<div className="md:grid grid-cols-6 h-60 hidden max-w-sm self-end">
			<div className="animate-flash m-4 h-0.5 w-0.5"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-0.5 w-0.5"></div>
			<div style={{ backgroundColor: color }} className="animate-slowslowflash mr-4 h-1 w-1"></div>
			<div style={{ backgroundColor: color }} className="animate-slowflash mt-10 h-1 w-1"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-1.5 w-1.5"></div>
			<div style={{ backgroundColor: color }} className="animate-slowslowflash mt-4 h-0.5 w-0.5"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-0.5 w-0.5"></div>
			<div style={{ backgroundColor: color }} className="animate-slowflash mr-4 h-1.5 w-1.5"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-0.5 w-0.5"></div>
			<div style={{ backgroundColor: color }} className="animate-slowslowflash mb-4 h-0.5 w-0.5"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-1 w-1"></div>
			<div style={{ backgroundColor: color }} className="animate-slowflash ml-4 h-1.5 w-1.5"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-0.5 w-0.5"></div>
		</div>



	);
}

export default FlashSquares;
