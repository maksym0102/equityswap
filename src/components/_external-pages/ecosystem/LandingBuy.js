/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#141721',
  padding: theme.spacing(0, 0)
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

export default function LandingBuy() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={5.9} sx={{ position: 'relative' }}>
            <Box>
              <Box
                component="img"
                alt="light mode"
                src="/static/home/buy.png"
                sx={{ margin: { xs: 'auto', md: '250px auto auto 0' }, maxWidth: { xs: '300px', md: '100%' } }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6.1}>
            <ContentStyle>
              <Box>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{
                    textTransform: 'none',
                    mb: 4,
                    color: 'common.white',
                    display: 'block',
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    fontSize: { xs: 50, md: 72 },
                    lineHeight: { xs: '60px', md: '92px' }
                  }}
                >
                  EQUITY Token <br /> enhanced with <br /> DAO features
                </Typography>
              </Box>
              <Box>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{
                    maxWidth: '500px',
                    textTransform: 'none',
                    mb: 4,
                    color: 'common.white',
                    display: 'block',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '28px',
                    opacity: 0.6,
                    letterSpacing: 0
                  }}
                >
                  Holders can create and vote on proposals to implement in the operation of the protocol.
                </Typography>
              </Box>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
