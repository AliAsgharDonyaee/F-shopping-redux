import React, { useState } from "react";

const Category = () => {
	const [data, setData] = useState([
		{ link: "#", title: "Life Style", color_1: "from-purple-500", color_2: "to-pink-500" },
		{ link: "#", title: "Life Style", color_1: "from-yellow-500", color_2: "to-orange-500" },
		{ link: "#", title: "Life Style", color_1: "from-blue-500", color_2: "to-indigo-500" },
		{ link: "#", title: "Life Style", color_1: "from-lime-500", color_2: "to-green-500" },
		{ link: "#", title: "Life Style", color_1: "from-cyan-500", color_2: "to-sky-500" },
		{ link: "#", title: "Life Style", color_1: "from-yellow-500", color_2: "to-orange-500" },
		{ link: "#", title: "Life Style", color_1: "from-fuchsia-500", color_2: "to-purple-500" },
		{ link: "#", title: "Life Style", color_1: "from-emerald-500", color_2: "to-teal-500" },
		{ link: "#", title: "Life Style", color_1: "from-rose-500", color_2: "to-pink-500" },
		{ link: "#", title: "Life Style", color_1: "from-yellow-500", color_2: "to-orange-500" },
	]);
	return (
		<>
			{data.map(({ link, title, color_1, color_2 }) => {
				return (
					<a
						href={link}
						className={`rounded-lg w-full h-10 xl:h-16 bg-gradient-to-br ${color_1} ${color_2} grid place-content-center font-bold text-sm xl:text-lg text-white`}
					>
						{title}
					</a>
				);
			})}
		</>
	);
};

export default Category;
