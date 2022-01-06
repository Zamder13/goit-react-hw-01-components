import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: 100px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;

  border-radius: 20px;
  box-sizing: border-box;
  background: var(--color-white);
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Photo = styled.img`
  margin-left: 8px;
`;
export const Status = styled.span`
  display: block;
  height: 10px;
  width: 10px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
`;
export const Name = styled.p`
  margin: 0 auto;
  font-weight: 500;
`;
