import { useEffect, useState } from 'react';
import { Card, Container, ContainerLoading } from './styles';

import loadingSpinner from '../../images/loading.svg';

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
      setIdLoading(null);
    })();
  }, [loading]);

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
    };
  }

  if (loading && idLoading === null) {
    return (
      <Container status={loading}>
        <img src={loadingSpinner} alt="Carregando..." />
      </Container>
    );
  }

  return (
    <Container>
      {orders.map((order) => (
        <Card key={order.id} status={order.status} orderId={order.id} idLoading={idLoading}>
          {
            idLoading === order.id
              ? <ContainerLoading><img src={loadingSpinner} alt="Carregando..." /></ContainerLoading>
              : ''

          }
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
      ))}

    </Container>
  );
}
