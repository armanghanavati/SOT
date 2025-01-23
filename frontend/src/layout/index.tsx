import React, { useState } from "react";
import {
  CssBaseline,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Messages from "../pages/Messages";
import SidebarLinks from "./Sidebar";
import Header from "./Header";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ResponsiveMaker from "../utils/helpers/ResponsiveMaker";
import PhoneLinks from "./PhoneLinks";

type PropsType = any;

const Sidebar: React.FC<PropsType> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openMessage, setOpenMessage] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <main className="relative">
      <ResponsiveMaker visibleWidth={700}>
        <Header
          open={open}
          toggleMenu={toggleMenu}
          openMessage={openMessage}
          setOpenMessage={setOpenMessage}
        />
      </ResponsiveMaker>
      <div className="flex">
        <ResponsiveMaker visibleWidth={700}>
          <SidebarLinks toggleMenu={toggleMenu} open={open} />
        </ResponsiveMaker>

        <div className="flex flex-grow justify-center items-center">
          <div className="max-w-7xl max-h-3/4 w-full h-full justify-center items-center mt-24">
            {children}
          </div>
          <PhoneLinks />
        </div>
      </div>
      {openMessage && (
        <Messages setOpenMessage={setOpenMessage} openMessage={openMessage} />
      )}
    </main>
  );
};

export default Sidebar;
