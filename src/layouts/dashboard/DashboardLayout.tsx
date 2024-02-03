import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { Box, styled } from '@mui/material';
import { Card } from '@mui/material';
//
import { ChatBox, ChatWidget } from 'sdk-chat-widget';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import { RootState, useSelector } from 'redux/store';
import RequireAuth from 'routes/RequireAuth';
import AuthProvider from 'utils/auth-context';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;
const WIDTH_CHAT_BOX = 300;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
  backgroundColor: '#fff',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  display: 'flex',
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  // paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const isOpenChatBox = useSelector((state: RootState) => state.chatBox.isOpenChatBox);

  useEffect(() => {
    if (ChatWidget) ChatWidget.show();
  }, []);

  return (
    <AuthProvider>
      <RequireAuth>
        <RootStyle>
          <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
          <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
          <MainStyle>
            <Box
              sx={{
                marginLeft: {
                  md: 0,
                },
                width: {
                  lg: `calc(100% - ${isOpenChatBox ? WIDTH_CHAT_BOX + 50 : 0}px)`,
                  md: `calc(100% - ${isOpenChatBox ? 20 : 0}px)`,
                },
                paddingLeft: {
                  lg: `${isOpenChatBox ? WIDTH_CHAT_BOX + 45 : 0}px`,
                  md: `0px`,
                },
                transition: 'padding-left 500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
              }}
            >
              <Outlet />
            </Box>
          </MainStyle>
          {/* <ChatBox /> */}
        </RootStyle>
      </RequireAuth>
    </AuthProvider>
  );
}
