import React from "react";
import IconButton from "@mui/material/IconButton";
import { Badge } from "@mui/base";

const NSBox = ({ title, count = 0, Icon }) => {
	return (
		<>
			<IconButton size='medium' aria-label={`${count} ${title}`} color='inherit'>
				<Icon />
				<Badge
					badgeContent={`${count}`}
					style={{
						width: "18px",
						height: "18px",
						backgroundColor: "rgb(219 39 119)",
						position: "relative",
						bottom: "10px",
						right: "5px",
						fontSize: "0.7em",
						borderRadius: "100%",
					}}
				/>
			</IconButton>
		</>
	);
};

export default NSBox;
