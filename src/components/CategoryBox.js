import React from "react";

const CategoryBox = () => {
	return (
		<>
			<div className='w-full h-[15%] 2xl:h-[25%] flex justify-between items-center'>
				<p className='text-slate-800 font-bold text-base 2xl:text-lg'>Shop by Category</p>
				<a href='#' className='text-pink-600 hover:text-pink-400'>
					See more
				</a>
			</div>
			<div className='p-1 w-full h-[80%] 2xl:h-[75%] relative flex gap-6 snap-x snap-mandatory overflow-x-auto'>
				<a
					href='#'
					className='rounded-lg border-2 border-gray-300 border-solid w-24 h-full scroll-mx-2 snap-center shrink-0'
				>
					<div className='w-full h-[70%] grid place-content-center'>
						<div className='rounded-full bg-gray-200 w-16 h-16'></div>
					</div>
					<div className='w-full h-[30%] grid place-content-center font-bold text-slate-800'>
						<p>T-Shart</p>
					</div>
				</a>
			</div>
		</>
	);
};

export default CategoryBox;
