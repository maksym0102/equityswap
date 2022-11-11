/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import { KeyMetrics, TokenDistribution, TokenSchedule } from '../components/_external-pages/tokenomics';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%',
  backgroundImage: `url("/static/home/team-page-bg.png")`,
  backgroundPosition: 'right 30%',
  backgroundRepeat: 'no-repeat no-repeat'
});

const ContentStyle = styled('div')(() => ({
  overflow: 'hidden',
  position: 'relative'
}));

// ----------------------------------------------------------------------

export default function TokenomicsPage() {
  return (
    <RootStyle title="EquitySwap | Real world assets into the blockchain" id="move_top">
      <ContentStyle>
          <KeyMetrics />
          <TokenDistribution />
          <TokenSchedule />
      </ContentStyle>
    </RootStyle>
  );
}
