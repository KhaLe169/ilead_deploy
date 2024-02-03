import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { Box, Divider, Drawer, Link, styled, useTheme, alpha, ListItem, ListItemIcon, Card } from '@mui/material';
import Favicon from 'static/img/Favicon.svg';
import MHidden from '../../components/MHidden';
import NavSection from '../../components/NavSection';
import Scrollbar from '../../components/Scrollbar';
import sidebarConfig from './SidebarConfig';
import BadgeAvatars from 'components/Avatar/Avatar';
import { Icon } from '@iconify/react';
import { pxToRem } from 'utils/pxToRem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { closeChatBoxRequest, openChatBoxRequest } from 'redux/chatBox/action';
import ChatBox from 'pages/chat';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 64;
const WIDTH_CHAT_BOX = 340;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

// ----------------------------------------------------------------------
const ListItemStyle = styled(ListItem)(({ theme }) => ({
  lineHeight: 22 / 14,
  fontSize: pxToRem(14),
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  '&:before': {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: 'none',
    position: 'absolute',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ListItemIconStyle = styled(ListItemIcon)(({ theme }) => ({
  width: 30,
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  color: theme.palette.primary.dark,
}));

type DashboardSidebarProps = {
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }: DashboardSidebarProps) {
  const dispatch = useDispatch();
  const isOpenChatBox = useSelector((state: RootState) => state.chatBox.isOpenChatBox);
  const theme = useTheme();
  const { pathname } = useLocation();

  const handleToggleChatBox = () => {
    if (isOpenChatBox) {
      dispatch(closeChatBoxRequest());
    } else {
      dispatch(openChatBoxRequest());
    }
  };

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const activeRootStyle = {
    color: 'primary.lighter',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.lighter, theme.palette.action.selectedOpacity),
    '&:before': {
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '4px',
      bottom: 0,
      paddingTop: '1px',
      paddingBottom: '1px',
      borderRadius: '0px 4px 4px 0px',
      backgroundColor: theme.palette.primary.lighter,
    },
  };
  const activeIcon = {
    color: 'primary.lighter',
    fontWeight: 'fontWeightMedium',
  };

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',

        '& .simplebar-content': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Box sx={{ px: 1, py: 3, display: 'flex', justifyContent: 'center' }}>
            <Box component={RouterLink} to="#" sx={{ display: 'flex', width: 32, height: 32 }}>
              {/* <Logo /> */}
              <img src={Favicon} alt="" />
            </Box>
          </Box>

          <Box sx={{ mb: 2, mx: 2.5 }}>
            <Link underline="none" component={RouterLink} to="#"></Link>
          </Box>

          <NavSection navConfig={sidebarConfig} />
          <Divider
            orientation="horizontal"
            variant="middle"
            flexItem
            sx={{ my: 2, borderWidth: 1, backgroundColor: 'primary.dark' }}
          />
        </Box>
        <Box
          sx={{
            py: 1,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Divider
            orientation="horizontal"
            variant="middle"
            flexItem
            sx={{ my: 1, borderWidth: 1, backgroundColor: 'primary.dark' }}
          />
          <ListItemStyle
            // button
            disableGutters
            // @ts-ignore
            to={'#'}
            sx={{
              ...(isOpenChatBox && activeRootStyle),
              my: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ListItemIconStyle
              sx={{
                ...(isOpenChatBox && activeIcon),
                marginLeft: '15px',
              }}
              onClick={() => {
                handleToggleChatBox();
              }}
            >
              <Icon icon="lucide:inbox" width={32} height={32} color="primary.lighter" />
            </ListItemIconStyle>
          </ListItemStyle>
          <BadgeAvatars />
        </Box>

        {/* <ListItemText disableTypography primary={item.title} /> */}
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'primary.main',
            },
          }}
        >
          {renderContent}
        </Drawer>
        {isOpenChatBox ? (
          <Card
            sx={{
              width: WIDTH_CHAT_BOX,
              height: '100%',
              backgroundColor: 'background_chat_box.main',
              overflow: 'hidden',
              marginTop: '88px',
              transform: 'translateX(0%)',
              transition: 'all 500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            }}
          >
            <ChatBox />
          </Card>
        ) : (
          <Card
            sx={{
              backgroundColor: 'background_chat_box.main',
              overflow: 'hidden',
              transform: 'translateX(-100%)',
              transition: 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)',
            }}
          ></Card>
        )}
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'primary.main',
              borderRadius: '0px 8px 8px 0px',
            },
          }}
        >
          {renderContent}
        </Drawer>
        {isOpenChatBox ? (
          <Card
            sx={{
              width: WIDTH_CHAT_BOX,
              marginLeft: `calc(${DRAWER_WIDTH}px + 2px) `,
              minHeight: '100vh',
              backgroundColor: 'background_chat_box.main',
              overflow: 'scroll',
              overflowX: 'hidden',
              transform: 'translateX(0%)',
              transition: 'all 500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
              },
              '&-ms-overflow-style:': {
                display: 'none', // Hide the scrollbar for IE
              },
            }}
          >
            <ChatBox />
          </Card>
        ) : (
          <Card
            sx={{
              width: WIDTH_CHAT_BOX,
              marginLeft: `calc(${DRAWER_WIDTH}px + 2px)`,
              height: '100%',
              backgroundColor: 'background_chat_box.main',
              overflow: 'hidden',

              transform: 'translateX(-100%)',
              transition: 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)',
            }}
          ></Card>
        )}
      </MHidden>
    </RootStyle>
  );
}
