import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Divider from "@mui/material/Divider";

// icons for the dropdown menu in the menu bar when user click on file or edit or any other options
import ArticleIcon from "@mui/icons-material/Article";
import FolderIcon from "@mui/icons-material/Folder";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import LanguageIcon from "@mui/icons-material/Language";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import DescriptionIcon from "@mui/icons-material/Description";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HistoryIcon from "@mui/icons-material/History";
import InfoIcon from "@mui/icons-material/Info";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";

//  designing the outline of dropdown menu//
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(0),
    minWidth: 300,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "0 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //using map function display the dropdown menu when user click on any option in menu bar//
  return (
    <div>
      {[
        "File",
        "Edit",
        "View",
        "Insert",
        "Format",
        "Tools",
        "Extensions  ",
        "Help",
      ].map((text) => (
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="text"
          disableElevation
          onClick={handleClick}
          style={{
            textTransform: "none",
            color: "#202124",
          }}
        >
          {text}
        </Button>
      ))}

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <ArticleIcon />
          New
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FolderIcon />
          Open
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <CopyAllIcon />
          Make a copy
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <PersonAddAltIcon />
          Share
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <EmailIcon />
          Email
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <DownloadIcon />
          Download
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={handleClose} disableRipple>
          <DriveFileRenameOutlineIcon />
          Rename
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <DriveFileMoveIcon />
          Move
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <AddToDriveIcon />
          Add shortcut to Drive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <DeleteIcon />
          Move to trash
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <HistoryIcon />
          version History
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <OfflinePinIcon />
          Make available offline
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <InfoIcon />
          Details
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <LanguageIcon />
          Language
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <DescriptionIcon />
          Page setup
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <PrintIcon />
          Print
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
