import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const Carousell = () => {
	var items = [
		{
			name: "Random Name #1",
			description: "Probably the most random thing you have ever seen!",
		},
		{
			name: "Random Name #2",
			description: "Hello World!",
		},
	];

	const Item = (props) => {
		return (
			<Paper className='h-[43vh] 2xl:h-[40vh] relative z-0'>
				<h2>{props.item.name}</h2>
				<p>{props.item.description}</p>
			</Paper>
		);
	};

	return (
		<Carousel indicators={false} slide={false} navButtonsAlwaysVisible>
			{items.map((item, index) => (
				<Item key={index} item={item} />
			))}
		</Carousel>
	);
};
export default Carousell;
