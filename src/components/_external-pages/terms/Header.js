/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  marginTop: '122px',
  padding: 0,
  maxWidth: '1220px',
  paddingLeft: '24px',
  paddingRight: '24px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    marginTop: '122px'
  }
}));
// ----------------------------------------------------------------------

export default function Header() {
  return (
    <RootStyle>
        <Box component="img" src="/static/home/privacy-bg.png" alt="privacy bg" sx={{ width: { xs: 'auto', md: '100%' }, height: { xs: '100%', md: 'auto' }, position: { xs: 'absolute', md: 'relative' } }} />
        <Container maxWidth="lg" sx={{
            position: { xs: 'relative', md: 'absolute' },
            top: { md: '50%' },
            left: { md: '50%' },
            transform: { md: 'translate(-50%, -50%)' },
            padding: { xs: '90px 0', md: 0 }
        }}>
            <Typography component="p" variant="overline" sx={{ textAlign: 'center', textTransform: 'none', marginBottom: 2, color: 'common.white', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: '38px', lineHeight: '48px' }}>
                Terms of Service
            </Typography>
            <Typography component="p" variant="overline" sx={{ textAlign: 'center', textTransform: 'none', color: 'common.white', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: '17px', lineHeight: '27px' }}>
                Last modified: 01 May 2022
            </Typography>
        </Container>
    </RootStyle>
  );
}
