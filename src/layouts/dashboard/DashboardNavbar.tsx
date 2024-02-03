// import { Icon } from "@iconify/react";
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { Icon } from '@iconify/react';
import { AppBar, IconButton, Toolbar, styled } from '@mui/material';
import ButtonArrowIcon from 'components/ButtonIcon/ButtonArrowIcon';
import HeaderTab from 'components/HeaderTab/HeaderTab';
import { useLocation } from 'react-router-dom';
import { RootState, useSelector } from 'redux/store';
import MHidden from '../../components/MHidden';
import Search from '../../components/Search/SearchInput';
//
// import { MHidden } from "../../components/@material-extend";
// import Searchbar from "./Searchbar";
// import AccountPopover from "./AccountPopover";
// import LanguagePopover from "./LanguagePopover";
// import NotificationsPopover from "./NotificationsPopover";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 63;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;
const WIDTH_CHAT_BOX = 340;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 0),
  },
}));

const HeaderStyle = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {},
}));

// ----------------------------------------------------------------------

type DashboardNavbarProps = {
  onOpenSidebar: VoidFunction;
};

export default function DashboardNavbar({ onOpenSidebar }: DashboardNavbarProps) {
  const isOpenChatBox = useSelector((state: RootState) => state.chatBox.isOpenChatBox);

  const RootStyle = styled(AppBar)(({ theme }) => ({
    // boxShadow: "none",
    // backdropFilter: "blur(6px)",
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: '#fff',
    display: 'flex',
    borderRadius: 8,
    marginRight: 15,
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${DRAWER_WIDTH + 30}px - ${isOpenChatBox ? WIDTH_CHAT_BOX : 0}px)`,
    },
  }));

  return (
    <RootStyle>
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>
        <HeaderStyle>
          <ButtonArrowIcon />
          <HeaderTab />
          <Search />
        </HeaderStyle>
      </ToolbarStyle>
    </RootStyle>
  );
}
