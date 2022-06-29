import { useEffect, useState } from 'react';
import { Card, Container } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [idLoading, setIdLoading] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3333/orders');
      const json = await response.json();
      setOrders(json);
      setLoading(false);
    })();
  }, []);

  function handleStatusChange(order) {
    return ({ target: { value } }) => {
      fetch(`http://localhost:3333/orders/${order.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: value }),
      });

      setLoading(true);
      setIdLoading(order.id);

      (async () => {
        const response = await fetch('http://localhost:3333/orders');
        const json = await response.json();
        setOrders(json);
        setLoading(false);
      })();
    };
  }

  if (loading && idLoading === null) {
    return <p>Carregando</p>;
  }

  return (
    <Container>
      {orders.map((order) => {
        if (loading) {
          if (order.id === idLoading) {
            return (
              <p key={order.id}>Carregando</p>
            );
          }
        }
        return (
          <Card key={order.id} status={order.status} loadingUpdate>
            <header>
              <h3>
                Pedido
                {' '}
                <strong>
                  #
                  {order.id}
                </strong>
              </h3>
              <small>
                MESA #
                {order.table}
              </small>
            </header>
            <p>
              {order.description}
            </p>

            <select value={order.status} onChange={handleStatusChange(order)}>
              <option value="PENDING">Pendente</option>
              <option value="PREPARING">Preparando</option>
              <option value="DONE">Finalizado</option>
            </select>
          </Card>
        );
      })}

    </Container>
  );
}
