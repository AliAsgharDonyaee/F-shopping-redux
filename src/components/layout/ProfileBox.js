import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";

const ProfileBox = () => {
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);

	return (
		auth && (
			<div>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='menu-appbar'
					aria-haspopup='true'
					onClick={(e) => setAnchorEl(e.currentTarget)}
				>
					<AccountCircle style={{ color: "#fff" }} />
				</IconButton>
				<Menu
					id='menu-appbar'
					anchorEl={anchorEl}
					style={{ marginTop: "3rem" }}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={Boolean(anchorEl)}
					onClose={() => setAnchorEl(null)}
				>
					<MenuItem onClick={() => setAnchorEl(null)}>Welcome Codawin</MenuItem>
					<MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
					<MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
					<MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
				</Menu>
			</div>
		)
	);
};

export default ProfileBox;
