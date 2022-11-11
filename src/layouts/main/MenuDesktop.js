import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Link, List, Stack, Popover, ListItem } from '@material-ui/core';
import { scroller } from 'react-scroll';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(['subheader', 'item'])
};

function IconBullet({ type = 'item' }) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && { ml: 0, width: 8, height: 2, borderRadius: 2 })
        }}
      />
    </Box>
  );
}

MenuDesktopItem.propTypes = {
  item: PropTypes.object,
  pathname: PropTypes.string,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

function MenuDesktopItem({ item, pathname, isHome, isOpen, isOffset, onOpen, onClose }) {
  const { title, path, children } = item;
  const isActive = pathname === path;
  const isEcosystem = pathname === '/ecosystem';

  if (children) {
    return (
      <div key={title}>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            ...((isHome || isEcosystem) && { color: 'common.white' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isOpen && { opacity: 0.48 }),
            fontSize: '12px',
            fontFamily: 'Montserrat',
            fontWeight: 500
          }}
        >
          {title}
          <Box
            component={Icon}
            icon={isOpen ? arrowIosUpwardFill : arrowIosDownwardFill}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 100, left: 0 }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={onClose}
          PaperProps={{
            sx: {
              px: 3,
              pt: 1,
              pb: 2,
              right: 16,
              margin: 'auto',
              maxWidth: 280,
              borderRadius: 2,
              boxShadow: (theme) => theme.customShadows.z24
            }
          }}
        >
          <List disablePadding>
            {children.map((list, index) => {
              const { title, path } = list;

              return (
                <ListItem
                  key={index}
                  // href={path}
                  to={path}
                  component={RouterLink}
                  underline="none"
                  sx={{
                    p: 0,
                    mt: 1,
                    typography: 'body2',
                    color: 'text.secondary',
                    transition: (theme) => theme.transitions.create('color'),
                    '&:hover': { color: 'text.primary' },
                    ...(item.path === pathname && {
                      typography: 'subtitle2',
                      color: 'text.primary'
                    })
                  }}
                >
                  {title}
                </ListItem>
              );
            })}
          </List>
        </Popover>
      </div>
    );
  }

  return (
    <LinkStyle
      onClick={() => {
        const link1 = '/';
        const baseUrl = window.location.origin.toString();
        const url = baseUrl + link1;
        let str = path;
        str = str.replace(url, '');
        scroller.scrollTo(str, {
          duration: 1500,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      }}
      key={title}
      href={path}
      // to={path}
      // component={RouterLink}
      sx={{
        ...((isHome || isEcosystem) && { color: 'common.white' }),
        ...(isOffset && { color: 'text.primary' }),
        ...((isHome || isEcosystem) && isOffset && isActive && { color: 'primary.main' }),
        fontSize: '12px',
        fontFamily: 'Montserrat',
        fontWeight: 500
      }}
    >
      {title}
    </LinkStyle>
  );
}

MenuDesktop.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array
};

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row" ml={isHome ? 13 : 0}>
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          pathname={pathname}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}
