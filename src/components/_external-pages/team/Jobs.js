/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Stack, Button } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0, 10)
}));

const members = [
    {
        "title": 'Front-End Engineer',
        "subtitle": "EquitySwap LLC",
        "detail": "We are looking for a talented designer to plan, design, build and implement the user interface of our web-based application",
        "skills": ["Fulltime", "Design", "Remote"]
    },{
        "title": 'Backend & DevOps Engineer',
        "subtitle": "EquitySwap LLC",
        "detail": "Develop software and solutions to optimize and improve the performance and implementation of the development process",
        "skills": ["Fulltime", "DevOps", "Remote"]
    },{
        "title": 'Community Manager',
        "subtitle": "EquitySwap LLC",
        "detail": "Set and implement social media and communication campaigns to align with marketing strategies and keep updated or social media presence",
        "skills": ["Fulltime", "Social", "Remote"]
    },{
        "title": 'Solidity Developer',
        "subtitle": "EquitySwap LLC",
        "detail": "Craft code and review smart contracts. Build smart contracts and back end web services to interact with various blockchain networks",
        "skills": ["Fulltime", "Solidity", "Remote"]
    }
]

// ----------------------------------------------------------------------

export default function Jobs() {
  return (
    <RootStyle>
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 4, color: 'common.black', display: 'block', fontFamily: 'Montserrat', fontWeight: 600, fontSize: { xs: 32, md: 42 }, lineHeight: { xs: '70px', md: '92px' } }}>
                Jobs
            </Typography>
            <Grid container spacing={10} justifyContent="space-between" alignItems="flex-start">
                {members.map(member => (
                    <Grid item xs={12} md={6} sx={{ position: 'relative' }} key={member.title}>
                        <Typography component="p" sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 20, lineHeight: 1.4, color: '#383332', marginBottom: '10px' }}>
                            { member.title }
                        </Typography>
                        <Typography component="p" sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 14, lineHeight: 1.4, color: '#AEB6BF', marginBottom: '20px' }}>
                            { member.subtitle }
                        </Typography>
                        <Typography component="p" sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 14, lineHeight: 1.8, color: '#AEB6BF', marginBottom: '20px' }}>
                            { member.detail }
                        </Typography>
                        <Stack direction="row" spacing={2} mb={2}>
                            {member.skills.map((skill, index) => (
                                <Button key={index} variant="contained" sx={{ background: '#F8FAFC', boxShadow: 'none', borderRadius: '12px', fontFamily: 'Poppins', padding: '13px 20px', fontWeight: 500, fontSize: 14, lineHeight: 1.4, color: '#383332', '&:hover': { background: '#F8FAFC' } }}>
                                    { skill }
                                </Button>
                            ))}
                        </Stack>
                        <Box sx={{ border: '1px solid #EFF1F2', width: '490px' }} />
                        <Button variant="contained" sx={{ marginTop: '20px', backgroundColor: 'common.black', color: 'common.white', borderRadius: '0px', fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, lineHeight: 1.4, padding: '18px', width: '322px' }}>
                            Apply Now
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </RootStyle>
  );
}
