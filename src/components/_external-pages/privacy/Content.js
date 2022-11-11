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
                Thank you for visiting https://equityswap.io 
            </Typography>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 4, color: '#77838F', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '27px' }}>
              The Site is owned and operated by the Company (together "Company", "we", "our", or "us"). This Privacy ("Privacy Policy") together with our Terms of Service (which can be found at https://equityswap.io/terms) ("Terms of Service") sets out the basis on which any Personal Information we collect from you ("you", "your", or "user"), or that you provide to us, will be processed by us. By “Personal Information”, we mean any information which, either alone or in combination with other data, enables you to be directly or indirectly identified, for example, your name, email address, username, contact details or any unique identifier such as an IP address, device ID or other online identifier.
              <br /><br />
              The Company minimizes Personal Information collected from you. Please read the following carefully to understand what data we collect, how that data is used and the ways it can be shared by us. If you do not wish for your Personal Information to be used in the ways described within this Privacy Policy then you should not access or use the Site or use any of the services, functions, or features offered from time to time on the Site ("Services").
              <br /><br />
              The data controller of your Personal Information is EquitySwap LLC
            </Typography>
            
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 1, color: '#141721', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '26px' }}>
              What information is collected?
            </Typography>
            <Typography component="p" variant="overline" sx={{ textTransform: 'none', marginBottom: 1, color: '#77838F', display: 'block', fontFamily: 'Nunito', fontWeight: 400, fontSize: 18, lineHeight: '27px' }}>
              Each time you use EquitySwap’s services the platform may automatically collect the following information: Internet protocol (IP) address used to connect to the Internet, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and information about your visit, including the dates and times you use the Site length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page. Special categories of data:
              <br /><br />
              We do not collect any categories of Personal Information about you (this includes your race or ethnicity, religious beliefs, sex life, sexual orientation, political opinions, information about your health, and genetic data).
              <br /><br />
              We do not collect any information related to your wallet, including your keystore file, password, mnemonic phrase, and private key.
            </Typography>
        </Container>
    </RootStyle>
  );
}
