/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container, Typography, Stack } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(20, 0, 1)
}));

const metrics = [
    {
        title: 'Ticker:',
        content: 'EQUITY'
    },{
        title: 'Blockchain Network:',
        content: 'BSC'
    },{
        title: 'Token Max Supply:',
        content: '100,000,000'
    },{
        title: 'Initial Token Circulation:',
        content: '7,500,000'
    },{
        title: 'Initial Market Cap:',
        content: 'TBC'
    }
]

// ----------------------------------------------------------------------

export default function KeyMetrics() {
  return (
    <RootStyle>
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 2, color: 'common.black', display: 'block', fontFamily: 'Montserrat', fontWeight: 600, fontSize: { xs: 32, md: 42 }, lineHeight: { xs: '70px', md: '92px' } }}>
                Key metrics
            </Typography>
            <Stack direction="column" justifyContent="space-between" alignItems="flex-start" sx={{
                background: '#F8F8F8',
                padding: '30px 15px',
                width: '390px',
                borderRadius: '16px'
            }}>
                {metrics.map(metric => (
                    <Stack direction="row" key={metric.title} sx={{ borderBottom: '0.5px solid #999' }}>
                        <Typography component="p" sx={{ fontSize: '16px', width: 210, fontFamily: 'Quicksand', fontWeight: 600, lineHeight: '30px', color: '#484E5C' }}>
                            {metric.title}
                        </Typography>
                        <Typography component="p" sx={{ fontSize: '16px', width: 150, fontFamily: 'Quicksand', fontWeight: 600, lineHeight: '30px', color: '#484E5C' }}>
                            {metric.content}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Container>
    </RootStyle>
  );
}
