/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 0, 7)
}));

// ----------------------------------------------------------------------

export default function TokenSchedule() {
  return (
    <RootStyle>
        <Container maxWidth="lg" sx={{ position: 'relative', paddingTop: 5 }}>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 3, color: 'common.black', display: 'block', fontFamily: 'Montserrat', fontWeight: 600, fontSize: { xs: 32, md: 42 }, lineHeight: { xs: '70px', md: '92px' } }}>
                Token release schedule
            </Typography>
            <Box component="img" src="/static/home/tokenomics-img2.png" alt="tokenomics" sx={{ width: '100%' }} />
        </Container>
    </RootStyle>
  );
}
