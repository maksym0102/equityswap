/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';
//
import { varFadeInUp } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  backgroundColor: '#141721'
}));

const SubRootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(20, 0, 10),
    backgroundPosition: 'calc(50% - 310px) center',
    backgroundRepeat: 'no-repeat no-repeat',
    [theme.breakpoints.up('md')]: {
        backgroundImage: 'url("/static/home/landing-mint-img.png")',
        padding: theme.spacing(20, 0, 40)
    }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: 0,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));

// ----------------------------------------------------------------------

export default function LandingMint() {
  return (
    <RootStyle>
      <SubRootStyle>
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <Grid container spacing={5} justifyContent="space-between" alignItems="flex-start">
            <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                <Box variants={varFadeInUp}>
                  <Box component="img" alt="light mode" src="/static/home/landing-mint-img.png" sx={{ margin: { xs: 'auto', md: 'auto 0 auto auto' }, display: { xs: 'block', md: 'none' } }} />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <ContentStyle>
                <Box>
                    <Typography component="p" variant="overline" sx={{ textTransform: 'none', mb: 4, color: 'common.white', display: 'block', fontFamily: 'Montserrat', fontWeight: 600, fontSize: { xs: 50, md: 82 }, lineHeight: { xs: '60px', md: '92px' } }}>
                        Mint tokens <br /> backed by <br /> real assets
                    </Typography>
                </Box>
                </ContentStyle>
            </Grid>
            </Grid>
        </Container>
      </SubRootStyle>
    </RootStyle>
  );
}
