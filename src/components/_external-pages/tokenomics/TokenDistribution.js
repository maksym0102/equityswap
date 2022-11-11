/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 0, 5)
}));

// ----------------------------------------------------------------------

export default function TokenDistribution() {
  return (
    <RootStyle>
        <Container maxWidth="lg" sx={{ position: 'relative', paddingTop: 5 }}>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 3, color: 'common.black', display: 'block', fontFamily: 'Montserrat', fontWeight: 600, fontSize: { xs: 32, md: 42 }, lineHeight: { xs: '70px', md: '92px' } }}>
                Token distribution
            </Typography>
            <Box component="img" src="/static/home/tokenomics-img1.png" alt="tokenomics" sx={{ marginLeft: { md: '-50px' } }} />
        </Container>
    </RootStyle>
  );
}
