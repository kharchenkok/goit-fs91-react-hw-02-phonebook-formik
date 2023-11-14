import styled from 'styled-components';
import { Button } from '../../styles/Base.styled';

export const List = styled.ul`
  margin: 0 auto;
  padding: 40px;
  display: grid;
  max-width: 800px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Item = styled.li`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 0.7fr;
  align-items: center;
  border-radius: 4px;
  background-color: white;
  padding: 10px 20px;
  &:not(:last-child) {
    border-bottom: 1px dashed #ccc;
  }
  svg {
    color: #2a5d8a;
  }
`;
export const ItemContent = styled.p`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const DeleteButton = styled(Button)`
  padding: 8px;
  font-size: 16px;
  background-color: #f85771;
  border: 2px solid #f85771;
  &:hover {
    background-color: white;
    color: #f85771;
  }
`;
