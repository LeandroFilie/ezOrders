import GlobalStyle from '../../styles/GlobalStyle';
import { Container } from './styles';

import Orders from '../Orders';

import logo from '../../images/logo.svg';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={logo} alt="ezOrders" />
        <Orders />
      </Container>

    </>
  );
}

export default App;
