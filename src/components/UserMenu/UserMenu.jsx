import React from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import css from "./UserMenu.module.css";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import { logout } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={css.wrapper}>
      <div>
        <IconButton
          size={"large"}
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
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
          onClose={handleClose}
        >
          <div className="wrapper1">
            <Typography variant="body1" className="text">
              {user.name}
            </Typography>
            <Typography variant="body1" className="text">
              {user.email}
            </Typography>
            <MenuItem
              onClick={() =>
                dispatch(logout())
                  .unwrap()
                  .then(() => {
                    toast.success("Logout success");
                  })
                  .catch(() => {
                    toast.error("Logout error");
                  })
              }
            >
              Log Out
            </MenuItem>
          </div>
        </Menu>
      </div>
    </div>
  );
};
