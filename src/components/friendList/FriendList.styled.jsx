import styled from 'styled-components';

export const List = styled.ul``;
export const Item = styled.li``;
export const Photo = styled.img``;
export const Status = styled.span`
  display: block;
  height: 20px;
  width: 20px;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
`;
export const Name = styled.p``;
