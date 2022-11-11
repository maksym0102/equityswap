/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0, 5)
}));

// ----------------------------------------------------------------------

export default function Content() {
  return (
    <RootStyle>
        <Container sx={{ position: 'relative', paddingTop: 1, maxWidth: '710px !important' }}>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 1, color: '#141721', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '26px' }}>
              Thank you for visiting EquitySwap.io and app.equityswap.io (the "Sites")
            </Typography>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 4, color: '#77838F', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '27px' }}>
              The following terms and conditions of service (these "Terms of Service") apply to all visitors and users of the Sites and application. By using any of the services, functions, or features offered from time to time on the Sites (collectively or individually, hereafter referred to as the "Services"), the user (hereafter referred to as "you" or "your") agrees to these Terms of Service. EquitySwap is a project ran by EquitySwap LLC (hereafter referred to as the "Company".)
            </Typography>
            
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 1, color: '#141721', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '26px' }}>
              Using our Sites
            </Typography>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 1, color: '#77838F', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '27px' }}>
              By using the Sites, you understand and agree that the Sites is only an interface for a smart contract managed tokenization project, where decisions are not made by a single entity, but by the company Community (the “Community”).
              <br /><br />
              These Terms of Service constitute the agreement and understanding with respect to the use of any or all of the Services, and any manner of accessing them, between you and EquitySwap. For the avoidance of doubt, these Terms of Service have two parties: you and EquitySwap. Any and all terms, conditions, licences, limitations, and obligations contained within and on the Sites are incorporated into these Terms by reference, including, without limiting the generality of the foregoing, the following Sites policies and pages: the Privacy Policy and the Risk Disclosure Statement. In particular, please note that all transactions of Digital Tokens on or off the Sites may be subject to fees levied by EquitySwap. In the event of any inconsistency between these Terms of Service and any other pages or policies on the Site, these Terms of Service shall prevail.
              <br /><br />
              By creating a swap request on the Sites or by using any of the Services, you acknowledge that you have read, understand, and completely agree to these Terms of Service in effect from time to time. If you disagree with these Terms of Service or with any subsequent amendments, changes, or updates, you may not use any of the Services; your only recourse in the case of disagreement is to stop using all of the Services.These Terms of Service may be amended, changed, or updated by EquitySwap at any time and without prior notice to you. The use of the Sites and any Services is void where prohibited by applicable law. 
            </Typography>
        </Container>
    </RootStyle>
  );
}
