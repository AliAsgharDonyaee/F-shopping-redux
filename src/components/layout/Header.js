import React from "react";
import Logo from "../assets/logo/svg/logo-light.svg";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchBox from "./SearchBox";
import ProfileBox from "./ProfileBox";
import NSBox from "./NSBox";

const Header = () => {
	const [links, setLinks] = React.useState([
		{ name: "Promo", link: "#" },
		{ name: "Codawin News", link: "#" },
		{ name: "Help & Center", link: "#" },
		{ name: "Language", link: "#" },
	]);

	return (
		<header className='w-full h-20 md:h-32 bg-slate-800'>
			<nav className='hidden md:flex w-full h-[30%] bg-slate-700'>
				<nav className='xl:mx-auto lg:ml-2 lg:mr-4 w-full xl:w-[1280px] 2xl:w-[1440px] h-full flex justify-between items-center'>
					<div className='w-1/2 2xl:w-1/3 h-full flex items-center'>
						<a href='#' className='text-gray-400 flex items-center transition hover:text-white '>
							<PhoneIphoneIcon />
							<p className='text-sm'>Download codawin mobile app now</p>
						</a>
					</div>
					<div className='w-1/2 lg:w-2/5 2xl:w-1/3 h-full'>
						<ul className='w-full h-full flex justify-around lg:justify-between items-center'>
							{links.map((e) => {
								return (
									<li>
										<a href={e.link} className='text-sm text-gray-400 transition hover:text-white '>
											{e.name}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</nav>
			</nav>
			<nav className='p-2 w-full h-full md:h-[70%]'>
				<nav className='mx-auto w-full xl:w-[1280px] 2xl:w-[1440px] h-full flex justify-between items-center'>
					<div className='w-1/2 md:w-1/5 2xl:w-[15%] h-full'>
						<a href='/' className='w-12 h-full flex justify-start items-center'>
							<img src={Logo} alt='logo' />
							<h1 className='ml-1 text-gray-100 font-bold'>CODAWIN</h1>
						</a>
					</div>
					<div className='hidden md:flex items-center justify-normal w-3/5 h-full'>
						<div className='w-1/5 h-full text-gray-200 text-xs flex items-center'>
							<LocationOnIcon />
							<p className='text-gray-400'>Iran, West Azerbaijan</p>
						</div>
						{/* problem */}
						<div className='w-4/5 h-full flex justify-center items-center'>
							<SearchBox />
						</div>
						{/* problem */}
					</div>
					<div className='w-1/2 md:w-1/5 2xl:w-[15%] h-1/2 grid grid-cols-10 grid-rows-1 justify-items-end text-gray-100'>
						<div className='w-8 h-8  col-span-3 grid place-content-center'>
							<NSBox title='new shop' dataTitle='0' Icon={LocalGroceryStoreIcon} />
						</div>
						<div className='w-8 h-8  col-span-3 grid place-content-center'>
							<NSBox title='new notifications' dataTitle='0' Icon={NotificationsIcon} />
						</div>
						<div className=' w-[2px] h-[90%] col-span-1 bg-gray-400'></div>
						<div className='w-8 h-8  col-span-3 grid place-content-center'>
							<ProfileBox />
						</div>
					</div>
				</nav>
			</nav>
		</header>
	);
};

export default Header;
