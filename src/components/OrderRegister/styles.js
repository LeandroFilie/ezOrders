import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 780px;
  margin-top: 42px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  padding: 0 8px;

  height: 45px;
  width: 25%;

  color: #C52233;
  font-weight: bold;
  font-size: 16px;

  background: transparent;
  border: 2px solid #C52233;
  border-radius: 5px;

  transition: all .2s;

  cursor: pointer;

  &:hover{
    color: #FFF;
    background: #C52233;
  }
`;
