/* eslint-disable prettier/prettier */
// material
import { useState } from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  height: '100%',
  backgroundColor: '#F8F9FA',
  padding: theme.spacing(20, 0, 15)
}));

const ContentStyle = styled('div')(() => ({
  overflow: 'hidden',
  position: 'relative'
}));

const faqs = [
  {
    quiz: '1. How do I use EquitySwap',
    answer: `Equityswap has its own decentralized application (dApp), where all the investment services are available in a single and integrated platform. All you need to use Equityswap is a web3 wallet and the utility token accepted for investing through the platform on backed one-to-one investment products.`
  },
  {
    quiz: '2. Why should I invest through EquitySwap?',
    answer: `Equityswap combines several features into one investment decentralized platform that increases reliability in multiple ways. If you want to reduce exposure from cash traditional stablecoin, Equityswap lets you hold the asset share token with a better performance rate than cash, in the same way you would do it in traditional financial markets. If you want to reduce risk and volatility of traditional cryptos, Equityswap lets you hold stablecoin of fund shares to reduce the volatility of your portfolio as these fund stablecoin is pegged to the fixed value of the real-world fund share.`
  },
  {
    quiz: '3. Which are the key features of EquitySwap?',
    answer: `Investing in traditional assets through web3. Fully backed asset tokens, as these are pegged oneto-one with real asset shares. Very low fees; depending on the tokens staked and the investing period the fees could approach to zero.`
  },
  {
    quiz: '4. Can I lose my money in EquitySwap?',
    answer: `Due to the protocol’s audits and security, your asset tokens will be fully backed by real shares of the real investment product. Thus, you will perform as the investment product does, and you will experiment profits and loses depending on the evolution of the financial markets and, specifically, the investment asset. 
    If you are invested and liquidates your tokens, you will profit or lose depending on the pegged investment. If you acquire an amount of asset tokens, that are fully backed by real asset shares, at a price of 100 USD, and you liquidate these tokens next year when the fund share has a price of 110 USD, you will have profit a 10% of return.`
  },
  {
    quiz: '5. What fees are involved using EquitySwap?',
    answer: `Fees are charged when transacting, what it means when investing and divesting, and these fees depend on how is your amount of Equityswap utility tokens hold on the decentralized platform. These fees do not depend on how long your investing lasts. So, if you are a long-term investor and you spend five years with the biggest amount of utility tokens staked and you own asset tokens, you will have paid 0.25% of fee when starting, and 0.25% when finishing your investment, what it means probably the lowest fees in distribution of investment products.`
  },
  {
    quiz: '6. What is the EQUITY token?',
    answer: `Equityswap token is the Equityswap’s utility token. Listed on global exchanges, the primary function of the token is to provide benefits and rights to Equityswap users, either with the capacity of using the platform, either with the benefit of receiving other investors’ fees as a daily airdrop from the protocol.
    In addition, once Equityswap completes its transition into a decentralized autonomous organization (DAO), Equityswap token will become a governance token. This means that Equityswap users will be able to participate in the protocol’s decision making by holding and staking Equityswap token.
    It is not possible to stake the utility token.
    `
  },
  {
    quiz: '7. What is the supply of the EQUITY token?',
    answer: `The MAX supply of the Equityswap token is 100,000,000.`
  },
  {
    quiz: '8. How do I stake the EQUITY token?',
    answer: `Investors can stake only investment token or usd stablecoin to benefit the platform buffer, not being possible to stake the utility token. Users in staking earn utility token at a constant rate, as a fix reward reserved in tokenomics.
    Depending on the staking conditions, the benefits change, but are defined before accepting the staking, not being possible to unlock staked capital in any case. Precise estimations about the returns of the different staking plans can be made with the calculator at equityswap.io web.
    `
  },
  {
    quiz: '9. What is the asset token?',
    answer: `Equityswap creates and issues the asset token as stablecoin pegged one-to-one to real asset shares. Asset token remains pegged to the value of the asset share through a highly efficient mechanism.`
  },
  {
    quiz: '10. What is the collateral of the asset token?',
    answer: `The collateral of the asset token are the shares of the real asset.`
  }
];

// ----------------------------------------------------------------------

export default function FaqPage() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <RootStyle title="EquitySwap | Real world assets into the blockchain" id="move_top">
      <ContentStyle>
        <Container sx={{ position: 'relative', paddingTop: 1, maxWidth: '860px !important' }}>
          <Typography
            component="p"
            variant="overline"
            sx={{
              textAlign: 'center',
              textTransform: 'none',
              marginBottom: 10,
              color: '#333333',
              display: 'block',
              fontFamily: 'Raleway',
              fontWeight: 700,
              fontSize: 48,
              lineHeight: '64px'
            }}
          >
            Frequently Asked Questions
          </Typography>

          {faqs.map((faq) => (
            <Accordion
              key={faq.quiz}
              expanded={expanded === faq.quiz}
              onChange={handleChange(faq.quiz)}
              sx={{ marginBottom: '10px', '&:before': { background: 'transparent' } }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{
                  padding: '30px 40px',
                  backgroundColor: '#FFF'
                }}
              >
                <Typography
                  sx={{
                    width: '90%',
                    flexShrink: 0,
                    fontFamily: 'Raleway',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#333333',
                    fontFeatureSettings: `'pnum' on, 'lnum' on`
                  }}
                >
                  {faq.quiz}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
