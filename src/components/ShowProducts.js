import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

const ShowProducts = () => {
	const data = useSelector((state) => state.data);
	return (
		<>
			<div className='w-full h-[20%] flex justify-between items-center text-slate-800'>
				<p className='font-bold text-base 2xl:text-lg'>Special Prodcuts for you</p>
				<a href='#' className='text-pink-600 hover:text-pink-400 text-base'>
					See more
				</a>
			</div>
			<div className='w-full h-[80%] relative flex gap-6 snap-x snap-mandatory overflow-x-auto'>
				{data?.map((i) => {
					return (
						<button
							key={i.id}
							onClick={() => axios.post("http://localhost:3000/products", i)}
							className='rounded-lg border-2 border-gray-300 border-solid w-40 md:w-48 2xl:w-60 h-full scroll-mx-2 snap-center shrink-0'
						>
							<div className='p-2 w-full h-1/2 grid place-content-center'>
								<img src={i.image} alt='img-product' className='w-20' />
							</div>
							<div className='p-2 w-full h-1/2 font-bold'>
								<div className='w-full h-[20%] text-xs 2xl:text-sm text-gray-400 flex items-center'>
									{i.category}
								</div>
								<div className='w-full h-[60%] text-sm 2xl:text-lg text-slate-700'>
									<p className='text-start'>{i.title.slice(0, 40)} ...</p>
								</div>
								<div className='w-full h-[20%] flex justify-between items-center'>
									<p className='text-xs md:text-base text-pink-600'>$ {i.price}</p>
									<p className='text-xs text-gray-400'>
										<StarIcon className='text-yellow-500' /> {i.rating.rate} | {i.rating.count}
									</p>
								</div>
							</div>
						</button>
					);
				})}
			</div>
		</>
	);
};

export default ShowProducts;
