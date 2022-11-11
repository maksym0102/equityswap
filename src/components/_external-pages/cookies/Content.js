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
              The Site may use “cookies”
            </Typography>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 4, color: '#77838F', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '27px' }}>
              A cookie is a small text file containing a unique identification number that identifies a user’s browser each time that user visits a website. The use of cookies is industry standard practice and many major browsers are initially set up to accept them. You can reset your browser to either refuse to accept all cookies or to notify you when you have received a cookie. However, if you refuse to accept cookies, you may not be able to use some of the features available on the Site.
            </Typography>

            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 1, color: '#141721', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '26px' }}>
              Disable or block our cookies
            </Typography>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 4, color: '#77838F', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '27px' }}>
              If you choose to disable or block our cookies on your computer or other devices you will need to do this through your browser. Click on the 'Help' menu on your particular browser to learn how to manage your cookie preferences. Alternatively, you can visit www.aboutcookies.org for comprehensive information on how to manage cookies.  
            </Typography>
            
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 1, color: '#141721', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '26px' }}>
              First-party cookies
            </Typography>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 4, color: '#77838F', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '27px' }}>
              We may set cookies (first-party cookies) on web pages, however, where we require additional information, we may also allow other companies to host cookies on our Site (third party cookies). These companies have been carefully selected by us and are required to meet contractual obligations they have with us.
            </Typography>
            
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 1, color: '#141721', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '26px' }}>
              Cookies categories
            </Typography>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 1, color: '#77838F', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '27px' }}>
              Strictly Necessary cookies - These are used for technical reasons and are necessary to enable the Site to operate efficiently.
              <br /><br />
              Functionality cookies - these are used to improve the functionality of the Site. They help us to identify you as a repeat user of the Site and help us remember your preferences (for example, your choice of language or region).
              <br /><br />
              Analytical - these record your visit to our Site, the pages you have visited and the links you have followed. We will use this information to make the Site and the advertising displayed on it (if any) more relevant to your interests. We may also share this information with third parties for this purpose.
            </Typography>
        </Container>
    </RootStyle>
  );
}
