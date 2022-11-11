/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Divider, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  backgroundColor: '#141721'
}));

const SubRootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(20, 0, 10),
  backgroundPosition: 'calc(50% - 310px) center',
  backgroundRepeat: 'no-repeat no-repeat',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0, 20)
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: 0,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function LandingMint() {
  return (
    <RootStyle>
      <SubRootStyle>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: '2' }}>
          <Grid container spacing={5} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12}>
              <ContentStyle>
                <Box>
                  <Typography
                    component="p"
                    variant="overline"
                    sx={{
                      mt: { xs: -12, md: 5 },
                      textTransform: 'none',
                      mb: 4,
                      color: 'common.white',
                      textAlign: 'center',
                      display: 'block',
                      fontFamily: 'Montserrat',
                      fontWeight: 600,
                      fontSize: { xs: 42, md: 82 },
                      lineHeight: { xs: '60px', md: '92px' }
                    }}
                  >
                    Pricing Plans
                  </Typography>
                </Box>
              </ContentStyle>
              <Grid container spacing={2} justifyContent="space-between" marginTop="40px" alignItems="flex-start">
                <Grid item xs={12} sm={6} md={3} sx={{ position: 'relative' }}>
                  <Box
                    component="p"
                    sx={{
                      width: { xs: '80%', md: '100%' },
                      minHeight: 400,
                      borderRadius: '10px',
                      margin: 'auto',
                      border: '2px solid #E0E0E0',
                      paddingTop: '30px'
                    }}
                  >
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontSize: '18px'
                      }}
                    >
                      Standard
                    </Typography>
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                        fontSize: '52px'
                      }}
                    >
                      +100
                    </Typography>
                    <Divider style={{ margin: '20px 10px' }} />
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        margin: 'auto',
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontSize: '14px',
                        maxWidth: '172px'
                      }}
                    >
                      For investors who
                      <br />
                      own the
                      <br />
                      minimum amount of utility tokens
                    </Typography>
                    <Box
                      style={{
                        margin: 'auto',
                        borderRadius: '8px',
                        backgroundColor: '#272a33',
                        padding: '15px',
                        marginTop: '40px',
                        width: '145px'
                      }}
                    >
                      <Typography
                        component="p"
                        variant="overline"
                        sx={{
                          margin: 'auto',
                          textTransform: 'none',
                          color: '#ffffff',
                          textAlign: 'center',
                          display: 'block',
                          fontFamily: 'Montserrat',
                          fontWeight: 700,
                          fontSize: '14px',
                          maxWidth: '172px',
                          opacity: '0.5'
                        }}
                      >
                        1.50% fee
                      </Typography>
                      <Typography
                        component="p"
                        variant="overline"
                        sx={{
                          margin: 'auto',
                          textTransform: 'none',
                          color: '#ffffff',
                          textAlign: 'center',
                          display: 'block',
                          fontFamily: 'Montserrat',
                          fontWeight: 400,
                          fontSize: '7px',
                          maxWidth: '172px',
                          opacity: '0.5'
                        }}
                      >
                        per transaction
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ position: 'relative' }}>
                  <Box
                    component="p"
                    sx={{
                      width: { xs: '80%', md: '100%' },
                      minHeight: 400,
                      borderRadius: '10px',
                      margin: 'auto',
                      border: '2px solid #E0E0E0',
                      paddingTop: '30px'
                    }}
                  >
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontSize: '18px'
                      }}
                    >
                      Plus
                    </Typography>
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                        fontSize: '52px'
                      }}
                    >
                      +1,000
                    </Typography>
                    <Divider style={{ margin: '20px 10px' }} />
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        margin: 'auto',
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontSize: '14px',
                        maxWidth: '172px'
                      }}
                    >
                      For investors who
                      <br />
                      own a small
                      <br />
                      amount of
                      <br />
                      utility tokens
                    </Typography>
                    <Box
                      style={{
                        cursor: 'pointer',
                        margin: 'auto',
                        borderRadius: '8px',
                        backgroundColor: '#272a33',
                        padding: '15px',
                        marginTop: '40px',
                        width: '145px'
                      }}
                    >
                      <Typography
                        component="p"
                        variant="overline"
                        sx={{
                          margin: 'auto',
                          textTransform: 'none',
                          color: '#ffffff',
                          textAlign: 'center',
                          display: 'block',
                          fontFamily: 'Montserrat',
                          fontWeight: 700,
                          fontSize: '14px',
                          maxWidth: '172px',
                          opacity: '0.5'
                        }}
                      >
                        1.00% fee
                      </Typography>
                      <Typography
                        component="p"
                        variant="overline"
                        sx={{
                          margin: 'auto',
                          textTransform: 'none',
                          color: '#ffffff',
                          textAlign: 'center',
                          display: 'block',
                          fontFamily: 'Montserrat',
                          fontWeight: 400,
                          fontSize: '7px',
                          maxWidth: '172px',
                          opacity: '0.5'
                        }}
                      >
                        per transaction
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ position: 'relative' }}>
                  <Box
                    component="p"
                    sx={{
                      width: { xs: '80%', md: '100%' },
                      minHeight: 400,
                      borderRadius: '10px',
                      margin: 'auto',
                      border: '2px solid #E0E0E0',
                      cursor: 'pointer',
                      paddingTop: '30px'
                    }}
                  >
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontSize: '18px'
                      }}
                    >
                      Premium
                    </Typography>
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                        fontSize: '52px'
                      }}
                    >
                      +5,000
                    </Typography>
                    <Divider style={{ margin: '20px 10px' }} />
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        margin: 'auto',
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontSize: '14px',
                        maxWidth: '172px'
                      }}
                    >
                      For investors who
                      <br />
                      own a mid
                      <br />
                      amount of
                      <br />
                      utility tokens
                    </Typography>
                    <Box
                      style={{
                        margin: 'auto',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        backgroundColor: '#272a33',
                        padding: '15px',
                        marginTop: '40px',
                        width: '145px'
                      }}
                    >
                      <Typography
                        component="p"
                        variant="overline"
                        sx={{
                          margin: 'auto',
                          textTransform: 'none',
                          color: '#ffffff',
                          textAlign: 'center',
                          display: 'block',
                          fontFamily: 'Montserrat',
                          fontWeight: 700,
                          fontSize: '14px',
                          maxWidth: '172px',
                          opacity: '0.5'
                        }}
                      >
                        0.50% fee
                      </Typography>
                      <Typography
                        component="p"
                        variant="overline"
                        sx={{
                          margin: 'auto',
                          textTransform: 'none',
                          color: '#ffffff',
                          textAlign: 'center',
                          display: 'block',
                          fontFamily: 'Montserrat',
                          fontWeight: 400,
                          fontSize: '7px',
                          maxWidth: '172px',
                          opacity: '0.5'
                        }}
                      >
                        per transaction
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ position: 'relative' }}>
                  <Box
                    component="p"
                    sx={{
                      cursor: 'pointer',
                      width: { xs: '80%', md: '100%' },
                      minHeight: 400,
                      borderRadius: '10px',
                      margin: 'auto',
                      border: '2px solid #E0E0E0',
                      paddingTop: '30px'
                    }}
                  >
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontSize: '18px'
                      }}
                    >
                      Institutional
                    </Typography>
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                        fontSize: '52px'
                      }}
                    >
                      +10,000
                    </Typography>
                    <Divider style={{ margin: '20px 10px' }} />
                    <Typography
                      component="p"
                      variant="overline"
                      sx={{
                        margin: 'auto',
                        textTransform: 'none',
                        color: '#ffffff',
                        textAlign: 'center',
                        display: 'block',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontSize: '14px',
                        maxWidth: '172px'
                      }}
                    >
                      For investors who
                      <br />
                      own a great
                      <br />
                      amount of
                      <br />
                      utility tokens
                    </Typography>
                    <Box
                      style={{
                        margin: 'auto',
                        borderRadius: '8px',
                        backgroundColor: '#272a33',
                        padding: '15px',
                        marginTop: '40px',
                        width: '145px'
                      }}
                    >
                      <Typography
                        component="p"
                        variant="overline"
                        sx={{
                          margin: 'auto',
                          textTransform: 'none',
                          color: '#ffffff',
                          textAlign: 'center',
                          display: 'block',
                          fontFamily: 'Montserrat',
                          fontWeight: 700,
                          fontSize: '14px',
                          maxWidth: '172px',
                          opacity: '0.5'
                        }}
                      >
                        0.25% Fee
                      </Typography>
                      <Typography
                        component="p"
                        variant="overline"
                        sx={{
                          margin: 'auto',
                          textTransform: 'none',
                          color: '#ffffff',
                          textAlign: 'center',
                          display: 'block',
                          fontFamily: 'Montserrat',
                          fontWeight: 400,
                          fontSize: '7px',
                          maxWidth: '172px',
                          opacity: '0.5'
                        }}
                      >
                        per transaction
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </SubRootStyle>
    </RootStyle>
  );
}
