import { useEffect, useState } from 'react';
import { Button, Container } from './styles';

export default function OrderRegister() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3333/orders');
      const json = await response.json();
      setOrders(json);
    })();
  }, []);

  return (
    <Container>
      <p>
        {orders.length}
        {' '}
        Pedidos
      </p>
      <Button>
        Novo Pedido
      </Button>
    </Container>

  );
}
