import { motion } from 'framer-motion';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container, Typography, Stack } from '@material-ui/core';
//
import { varFadeInRight, varWrapEnter, varFadeInUp } from '../../animate';

// ----------------------------------------------------------------------
const RootStyle = styled(motion.div)(() => ({
  position: 'relative',
  backgroundColor: '#141721',
  overflow: 'hidden'
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 620,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(25),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: '-0%',
  bottom: 0,
  zIndex: 8,
  margin: 'auto',
  position: 'absolute',
  filter: `drop-shadow(40px 80px 80px rgba(0, 0, 0, 0.48))`,
  [theme.breakpoints.up('xl')]: {
    right: 'calc(65% - 1600px)'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {/* <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} /> */}

        <HeroImgStyle
          sx={{ display: { md: 'block', xs: 'none' } }}
          alt="hero"
          src="/static/home/laptop.png"
          variants={varFadeInUp}
        />

        <Container maxWidth="lg">
          <ContentStyle>
            <Box>
              <Typography
                variant="p"
                sx={{
                  color: 'common.white',
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: { xs: '50px', md: '82px' },
                  lineHeight: { xs: '60px', md: '92px' },
                  marginBottom: 0
                }}
              >
                Buy EQUITY <br />
                tokens to use <br /> the platform
              </Typography>
            </Box>

            <Box style={{ marginTop: '20px' }}>
              <Typography
                sx={{
                  color: 'common.white',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '28px',
                  opacity: { mb: 1, md: 0.6 },
                  background: { md: 'none', xs: '#0000008c' },
                  maxWidth: 578
                }}
              >
                EQUITY is the utility token of EquitySwap's protocol. Commissions are not paid with this token but you
                need to have it to use the platform.The more tokens you have, the lower the commissions will be!
                <br />
                <br />
                For more information see our plans below
              </Typography>
            </Box>
            <Box style={{ marginTop: '60px' }}>
              <Typography
                sx={{
                  color: 'common.white',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '28px',
                  opacity: 0.6,
                  maxWidth: 578
                }}
              >
                Purchase EQUITY
              </Typography>
            </Box>
            <Stack
              style={{ marginTop: '0px' }}
              direction="row"
              spacing={1.5}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <motion.img variants={varFadeInRight} src="/static/home/icons.png" />
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
