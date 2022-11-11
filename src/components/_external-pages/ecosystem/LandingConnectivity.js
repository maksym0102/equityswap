/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  paddingTop: '80px',
  backgroundSize: 'cover',
  backgroundPosition: 'right bottom'
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

export default function LandingConnectivity() {
  return (
    <RootStyle>
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', overflow: 'hidden' }}
        id="websection"
        className="#websection"
      >
        <Grid container spacing={0} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box>
              <Box
                component="img"
                alt="light mode"
                src="/static/home/globes.png"
                sx={{ margin: { xs: 'auto', md: 'auto auto -7px 0' }, maxWidth: { xs: 300, md: '100%' } }}
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
                    mb: 4,
                    color: 'common.black',
                    display: 'block',
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    fontSize: { xs: 40, md: 64 },
                    lineHeight: '60px'
                  }}
                >
                  Switch your <br /> exposure from <br /> cryptos to real <br /> world assets
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="p"
                  sx={{
                    maxWidth: 500,
                    textTransform: 'none',
                    color: { md: '#7C7B7B', mb: 'white', xs: 'white' },
                    display: 'block',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '28px',
                    opacity: { md: 0.6, mb: 1 },
                    margin: { xs: 'auto' }
                  }}
                >
                  Tokenized assets are collateralised at a 1:1 ratio and are custodied by EquitySwap LLC
                </Typography>
              </Box>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
