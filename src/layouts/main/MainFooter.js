import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, Stack, Box } from '@material-ui/core';

import SubscribeForm from './SubscribeForm';
import { mailchimpConfig } from '../../config';
// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Service',
    children: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Audit', href: '#' },
      { name: 'Explorer', href: 'https://www.explorer.equityswap.io/', external: true },
      { name: 'Technology', href: '#' }
    ]
  },
  {
    headline: 'Company',
    children: [
      { name: 'Team', href: '/team' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  }
];

const RootStyle = styled('div')(() => ({
  position: 'relative',
  backgroundColor: '#141721'
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle id="footer" className="#footer">
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 5 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={8} md={3} mt={3}>
            <ScrollLink to="move_top" spy smooth mb={8}>
              <Box
                component="img"
                src="/static/home/logo-sm.png"
                alt="logo"
                sx={{ width: 125, margin: { xs: '0 auto', md: '0' } }}
              />
            </ScrollLink>
            <Typography
              variant="body2"
              sx={{
                pr: { md: 5 },
                fontFamily: '"Roboto", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.5,
                color: '#A2A9B0',
                marginTop: '20px',
                paddingLeft: '5px',
                maxWidth: '240px',
                textAlign: { xs: 'center', md: 'left' },
                margin: { xs: '0 auto', md: '30px 0 0' }
              }}
            >
              Bringing real-world assets to the blockchain
            </Typography>
          </Grid>

          <Grid item xs={12} md={9} mb={10}>
            <Grid container>
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Grid item xs={6} md={3} key={headline}>
                    <Typography
                      component="p"
                      variant="overline"
                      color="#FEFFFF"
                      sx={{
                        fontFamily: 'Raleway',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '22px',
                        textTransform: 'capitalize',
                        marginTop: { md: '30px', mb: '60px', xs: '60px' }
                      }}
                    >
                      {headline}
                    </Typography>
                    {children.map((link) =>
                      link.external ? (
                        <Link
                          href={link.href}
                          key={link.name}
                          color="#A2A9B0"
                          variant="body2"
                          sx={{
                            display: 'block',
                            fontFamily: 'Roboto',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: 1.5,
                            marginTop: '30px'
                          }}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <Link
                          to={link.href}
                          key={link.name}
                          color="#A2A9B0"
                          variant="body2"
                          component={RouterLink}
                          sx={{
                            display: 'block',
                            fontFamily: 'Roboto',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: 1.5,
                            marginTop: '30px'
                          }}
                        >
                          {link.name}
                        </Link>
                      )
                    )}
                  </Grid>
                );
              })}
              <Grid item xs={12} md={6}>
                <Typography
                  component="p"
                  variant="overline"
                  color="#FEFFFF"
                  sx={{
                    fontFamily: 'Raleway',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '22px',
                    textTransform: 'initial',
                    marginTop: { md: '30px', mb: '60px', xs: '60px' }
                  }}
                >
                  Subscribe for EquitySwap newsletter
                </Typography>
                <Typography
                  color="#A2A9B0"
                  variant="body2"
                  component="p"
                  sx={{
                    display: 'block',
                    fontFamily: 'Roboto',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: 1.5,
                    marginTop: '20px'
                  }}
                >
                  Your email
                </Typography>
                <Stack direction="row" mt={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                  <MailchimpSubscribe
                    url={mailchimpConfig.url}
                    render={(props) => {
                      const { subscribe, status, message } = props || {};
                      return (
                        <SubscribeForm
                          status={status}
                          message={message}
                          onValidated={(formData) => subscribe(formData)}
                        />
                      );
                    }}
                  />
                </Stack>
                <Stack direction="row" mt={2} alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                  <Link>
                    <Box component="img" src="/static/home/ic_reddit.png" alt="reddit icon" />
                  </Link>
                  <Link href="https://twitter.com/EquitySwap" target="_blank">
                    <Box component="img" src="/static/home/ic_twitter.png" alt="twitter icon" ml={2} />
                  </Link>
                  <Link href="https://github.com/equityswap" target="_blank">
                    <Box component="img" src="/static/home/ic_github.png" alt="github icon" ml={2} />
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <hr />

        <Stack direction="row" justifyContent="space-between">
          <Typography
            component="p"
            variant="body2"
            sx={{
              mt: 5,
              pb: 8,
              textAlign: { xs: 'center', md: 'left' },
              fontSize: '16px',
              fontWeight: 400,
              fontFamily: 'Roboto',
              color: '#A2A9B0'
            }}
          >
            © 2022 EquitySwap
          </Typography>
          <Link href="mailto:info@equityswap.io?subject=Inquiry" variant="body2">
            <Typography
              component="p"
              variant="body2"
              sx={{
                mt: 5,
                pb: 8,
                textAlign: { xs: 'center', md: 'left' },
                fontSize: '16px',
                fontWeight: 400,
                fontFamily: 'Roboto',
                color: '#A2A9B0'
              }}
            >
              <Box
                component="img"
                alt="mailbox"
                src="/static/home/mailbox.png"
                sx={{ display: 'inline-block', marginRight: '10px', marginBottom: '-3px' }}
              />
              info@equityswap.io
            </Typography>
          </Link>
        </Stack>
      </Container>
    </RootStyle>
  );
}
