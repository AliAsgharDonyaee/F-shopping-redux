import React from "react";

const BestProducts = () => {
	return (
		<>
			<div className='w-full h-[20%] flex justify-between items-center text-slate-800'>
				<p className='font-bold text-base 2xl:text-lg'>SpeProdcuts</p>
				<a href='#' className='text-pink-600 hover:text-pink-400 text-base'>
					See more
				</a>
			</div>
			<div className='w-full h-[80%] relative flex gap-6 snap-x snap-mandatory overflow-x-auto'>
				<a
					href='#'
					className='rounded-lg border-2 border-gray-300 border-solid w-40 md:w-48 2xl:w-60 h-full scroll-mx-2 snap-center shrink-0'
				>
					<div className='p-2 w-full h-1/2 grid place-content-center'>
						<img src='' alt='img-product' />
					</div>
					<div className='p-2 w-full h-1/2 font-bold'>
						<div className='w-full h-[20%] text-xs 2xl:text-sm text-gray-400 flex items-center'>
							category name
						</div>
						<div className='w-full h-[60%] text-sm 2xl:text-lg text-slate-700'>lorem</div>
						<div className='w-full h-[20%] flex justify-between items-center'>
							<p className='text-xs md:text-base text-pink-600'>$ 299.99</p>
							<p className='text-xs text-gray-400'>star 4.9 | 2996</p>
						</div>
					</div>
				</a>
			</div>
		</>
	);
};

export default BestProducts;
