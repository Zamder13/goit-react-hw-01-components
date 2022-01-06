import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 100%;
  display: flex;
  list-style: none;
  gap: 30px;
`;
export const Item = styled.li``;
export const Info = styled.span`
  font-weight: ${props => {
    return props.info ? `700` : `400`;
  }};
`;
