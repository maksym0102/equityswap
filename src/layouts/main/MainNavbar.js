import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@material-ui/core';
// components
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  // const isOffset = useOffSetTop(100);
  const isOffset = false;
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isEcosystem = pathname === '/ecosystem';
  return (
    <AppBar color="transparent" sx={{ boxShadow: 0, position: 'absolute', paddingTop: '35px' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <RouterLink to="/">
            {(isHome || isEcosystem) && !isOffset ? (
              <Box
                component="img"
                sx={{ width: { xs: '150px', md: '200px' } }}
                src="/static/home/logo-white.png"
                alt="logo"
              />
            ) : (
              <Box
                component="img"
                sx={{ width: { xs: '150px', md: '200px' } }}
                src="/static/home/logo-black.png"
                alt="logo"
              />
            )}
          </RouterLink>
          {(!isHome || !isEcosystem) && <Box sx={{ flexGrow: 1 }} />}
          <MHidden width="mdDown">
            <MenuDesktop
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
              sx={{ fontSize: '16px', fontFamily: 'Poppins' }}
            />
          </MHidden>
          <Box sx={{ flexGrow: 1 }} />

          <Button
            variant="contained"
            target="_blank"
            href="https://app.equityswap.io"
            sx={{
              fontSize: { xs: '12px', md: '16px' },
              fontFamily: 'Poppins',
              width: { xs: 'auto', md: 132 },
              lineHeight: { xs: '30px', md: '41px' },
              fontWeight: 400,
              borderRadius: '0px',
              border: isHome || isEcosystem ? 'solid 2px #FFF' : 'solid 2px #000',
              boxShadow: 'none'
            }}
          >
            Launch App
          </Button>

          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
