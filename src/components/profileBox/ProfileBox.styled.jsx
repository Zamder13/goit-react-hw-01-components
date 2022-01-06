import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const Photo = styled.img`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #ffffff94;
`;

export const Info = styled.p`
  color: ${props =>
    props.email ? 'var(--color-secondary-text)' : `var(--color-black)`};
`;
