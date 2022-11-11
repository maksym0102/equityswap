/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0),
  background: 'url("/static/home/landing-stake-bg.svg")',
  backgroundSize: 'cover',
  backgroundPosition: 'left top'
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

export default function LandingStake() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Typography
          component="p"
          sx={{
            textTransform: 'none',
            color: '#000000',
            display: 'block',
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: 22,
            lineHeight: '33px',
            textAlign: 'left'
          }}
        >
          Our Partners
        </Typography>
        <Box
          component="img"
          alt="landing-multichain-header"
          src="/static/home/landing-multichain-header.png"
          sx={{ margin: '0 auto 50px' }}
        />
        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box>
              <Box
                component="img"
                alt="light mode"
                src="/static/home/landing-multichain-img.png"
                sx={{ margin: { xs: 'auto', md: 'auto 0 auto auto' }, maxWidth: { xs: 300, md: '100%' } }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentStyle>
              <Box>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{
                    textTransform: 'none',
                    marginBottom: 4,
                    color: 'common.black',
                    display: 'block',
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    fontSize: { xs: 40, md: 64 },
                    lineHeight: '60px',
                    letterSpacing: 0
                  }}
                >
                  Multichain <br /> Support
                </Typography>
              </Box>

              <Box>
                <Typography
                  component="p"
                  sx={{
                    maxWidth: 540,
                    marginBottom: 4,
                    textTransform: 'none',
                    color: '#7C7B7B',
                    display: 'block',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '28px',
                    opacity: 0.6,
                    margin: { xs: 'auto', md: 'auto auto 32px auto' }
                  }}
                >
                  EquitySwap is a next-gen web3 asset manager that lets you invest in traditional assets with the
                  benefits of blockchain technology
                </Typography>
              </Box>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
