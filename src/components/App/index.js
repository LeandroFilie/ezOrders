import GlobalStyle from '../../styles/GlobalStyle';
import { Container } from './styles';

import Orders from '../Orders';
import OrderRegister from '../OrderRegister';

import logo from '../../images/logo.svg';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={logo} alt="ezOrders" />
        <OrderRegister />
        <Orders />
      </Container>

    </>
  );
}

export default App;
