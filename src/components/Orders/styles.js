import styled, { css } from 'styled-components';

const CardStatusVariants = {
  PREPARING: css`
    background: #F6A609;
    color: #FFF;

    header small {
      background: #FFF;
      color: #0A100D;
    }

    select {
      border-color: #FFF;
    }
  `,
  DONE: css`
    background: #2AC769;
    color: #FFF;

    header small {
      background: #FFF;
      color: #0A100D;
    }

    select {
      border-color: #FFF;
    }
  `,
};

export const Container = styled.div`
  margin-top: 42px;
  width: 100%;

  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr;

  @media (min-width: 658px){
    ${({ status }) => css`
      grid-template-columns: ${status ? '1fr' : '1fr 1fr'};
      justify-items: ${status ? 'center' : ''}
    `}
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
`;

export const Card = styled.div`
  background: #FFF;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  opacity: ${(props) => (props.orderId === props.idLoading ? '0.2' : '1')};
  position: relative;

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 18px;
      font-weight: 400;
    }

    small {
      padding: 4px 8px;

      background: #CCC;
      border-radius: 5px;
      color: #FFF;

      font-weight: bold;
      font-size: 12px;
    }
  }

  p{
    margin-top: 16px;
    font-size: 14px;
  }

  select{
    margin-top: 8px;
    padding: 0 8px;
    
    height: 45px;
    width: 100%;

    border-radius: 5px;
    border: 1px solid #CCC;

    background: #FFF;

    font-size: 14px;
  }

  img {
    position: absolute;
    margin: 0 auto;
  }

  ${({ status }) => CardStatusVariants[status] || null}


`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
