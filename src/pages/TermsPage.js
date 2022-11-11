/* eslint-disable prettier/prettier */
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import { Header, Content } from '../components/_external-pages/terms';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(() => ({
  overflow: 'hidden',
  position: 'relative'
}));

// ----------------------------------------------------------------------

export default function TermsPage() {
  return (
    <RootStyle title="EquitySwap | Real world assets into the blockchain" id="move_top">
      <ContentStyle>
          <Header />
          <Content />
      </ContentStyle>
    </RootStyle>
  );
}
