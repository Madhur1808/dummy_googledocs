// this is the side bar component which open when user clicks on the hamburger menu present on the extreme right of the app.///

//importing all the neccessary material ui component//
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

//importing all the icons///

import Hamburger from "../images/menu_FILL0_wght400_GRAD0_opsz48.svg";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // logic for toggling the state of drawer component//
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="#484849"
        >
          <ListItem key="Google" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GoogleIcon />
              </ListItemIcon>
              <ListItemText primary="Google" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="#484849"
        >
          <ListItem key="Youtube" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <YouTubeIcon />
              </ListItemIcon>
              <ListItemText primary="Youtube" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          href="https://drive.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="#484849"
        >
          <ListItem key="Drive" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddToDriveIcon />
              </ListItemIcon>
              <ListItemText primary="Drive" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="#484849"
        >
          <ListItem key="Gmail" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Gmail" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="#484849"
        >
          <ListItem key="Map" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FmdGoodIcon />
              </ListItemIcon>
              <ListItemText primary="Map" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    // mapping over the iten of side bar is done
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <img src={Hamburger} onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
