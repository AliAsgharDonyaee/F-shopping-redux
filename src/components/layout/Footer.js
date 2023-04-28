import React from "react";
import Logo from "../assets/logo/svg/logo-light.svg";

const Footer = () => {
	return (
		<footer className='p-2 py-5 w-full h-96 md:h-48 bg-slate-900'>
			<div className='mx-auto w-full h-auto xl:w-[1280px] 2xl:w-[1440px] grid grid-cols-2 md:grid-cols-4'>
				<div className='flex flex-col'>
					<h1 className='mb-4 text-white text-lg font-bold'>ABOUT US</h1>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						Blog
					</a>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						B2B Digital
					</a>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						Bridestory
					</a>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						Miltra Blog
					</a>
				</div>
				<div className='flex flex-col'>
					<h1 className='mb-4 text-white text-lg font-bold'>BUY & SELL</h1>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						Bill & Top up
					</a>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						COD
					</a>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						Seler Education
					</a>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						Official store list
					</a>
				</div>
				<div className='flex flex-col'>
					<h1 className='mb-4 text-white text-lg font-bold'>OUR POLICIES</h1>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						Privacy Policy
					</a>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						Term of Use
					</a>
					<a href='#' className='mb-2 text-gray-500 hover:text-gray-300'>
						Term of Order
					</a>
				</div>
				<div className='flex flex-col justify-start text-gray-100'>
					<a href='/' className='w-12 h-full flex justify-start items-center'>
						<img src={Logo} alt='logo' />
						<h1 className='ml-1 text-gray-100 font-bold'>CODAWIN</h1>
					</a>
					<p>lorem info site</p>
					<div className='mt-2 w-full h-16 flex'>
						<div className='w-10 h-10 rounded-full border-2 border-gray-500 border-solid grid place-content-center'>
							<a href='#'>Fa</a>
						</div>
						<div className='ml-2 w-10 h-10 rounded-full border-2 border-gray-500 border-solid grid place-content-center'>
							<a href='#'>Fa</a>
						</div>
						<div className='ml-2 w-10 h-10 rounded-full border-2 border-gray-500 border-solid grid place-content-center'>
							<a href='#'>Fa</a>
						</div>
						<div className='ml-2 w-10 h-10 rounded-full border-2 border-gray-500 border-solid grid place-content-center'>
							<a href='#'>Fa</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
