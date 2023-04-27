import React from "react";
import IconButton from "@mui/material/IconButton";
import { Badge } from "@mui/base";

const NSBox = ({ title, dataTitle, Icon }) => {
	return (
		<>
			<IconButton size='medium' aria-label={`${dataTitle} ${title}`} color='inherit'>
				<Icon />
				<Badge
					badgeContent={0}
					style={{
						width: "18px",
						height: "18px",
						backgroundColor: "red",
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
