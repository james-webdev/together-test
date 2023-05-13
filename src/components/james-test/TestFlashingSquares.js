import React from "react";



export function FlashSquares({ color, position }) {

	return (
		<div style={{marginTop: '40px'}} className="grid grid-cols-6 h-40 max-w-sm ">
			<div className="animate-flash ml-4 h-1 w-1"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-2 w-2"></div>
			<div style={{ backgroundColor: color }} className="animate-slowslowflash mr-4 h-2 w-2"></div>
			<div style={{ backgroundColor: color }} className="animate-slowflash m-4 h-1 w-1"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-3 w-3"></div>
			<div style={{ backgroundColor: color }} className="animate-slowflash mt-4 h-2 w-2"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-2 w-2"></div>
			<div style={{ backgroundColor: color }} className="animate-slowflash mr-4 h-1.5 w-1.5"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-3 w-3"></div>
			<div style={{ backgroundColor: color }} className="animate-slowslowflash mb-4 h-2.5 w-2.5"></div>
			<div style={{ backgroundColor: color }} className="animate-flash m-4 h-1 w-1"></div>
			<div style={{ backgroundColor: color }} className="animate-slowflash ml-4 h-1.5 w-1.5"></div>
			<div style={{ backgroundColor: color }} className="animate-slowslowflash m-4 h- w-2"></div>
		</div>



	);
}

export default FlashSquares;
