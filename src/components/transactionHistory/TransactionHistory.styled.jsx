import styled from 'styled-components';

export const Table = styled.table`
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;

  width: 100%;
`;
export const Head = styled.thead`
  background-color: var(--color-sweet);
  border: 1px solid black;
`;
export const HeadRow = styled.tr``;
export const HeadItem = styled.th`
  color: #ffffffe6;
`;
export const Body = styled.tbody``;
export const BodyRow = styled.tr`
  :nth-child(even) {
    background-color: #e495e4;
  }
  :nth-child(odd) {
    background-color: var(--color-orange);
  }
`;
export const BodyItem = styled.td`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;
