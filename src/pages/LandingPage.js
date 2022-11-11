// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingConnectivity,
  LandingMint,
  LandingStake,
  LandingBuy,
  LandingMultichain
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="EquitySwap | Real world assets into the blockchain" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingConnectivity />
        <LandingMint />
        <LandingStake />
        <LandingBuy />
        <LandingMultichain />
      </ContentStyle>
    </RootStyle>
  );
}
