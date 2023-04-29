import React from "react";
import Carousell from "../Carousel";
import Category from "../Category";
import CategoryBox from "../CategoryBox";
import ShowProducts from "../ShowProducts";

const PageShop = () => {
	return (
		<section className='w-full h-auto '>
			<article className='w-full h-96'>
				<Carousell />
			</article>
			<article className='mx-auto -mt-16 p-2 w-full xl:w-[1280px] 2xl:w-[1440px] h-auto grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-y-4 lg:gap-x-4 relative z-10'>
				<div className='shadow-lg rounded-xl bg-white p-2 px-4 w-full h-44 xl:h-52 flex flex-col justify-between'>
					<CategoryBox />
				</div>
				<div className='shadow-lg rounded-xl bg-white p-2 w-full h-44 xl:h-52'></div>
			</article>
			<article className='px-2 mx-auto mt-4 w-full xl:w-[1280px] 2xl:w-[1440px] h-auto'>
				<div className='rounded-lg p-2 px-4 mb-8 w-full h-72 2xl:h-96 bg-white'>
					<ShowProducts />
				</div>
				<div className='rounded-lg p-2 px-4 mb-8 w-full h-72 2xl:h-96 bg-white'>
					<ShowProducts />
				</div>
				<div className='rounded-lg p-2 px-4 mb-8 w-full h-auto grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 grid-rows-auto gap-2'>
					<Category />
				</div>
			</article>
		</section>
	);
};

export default PageShop;
