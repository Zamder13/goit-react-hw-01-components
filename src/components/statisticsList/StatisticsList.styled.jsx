import styled from 'styled-components';
export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
export const Item = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  :first-child {
    border-bottom-left-radius: 20px;
  }
  :last-child {
    border-bottom-right-radius: 20px;
  }

  flex-direction: column;

  background-color: ${props => {
    switch (props.color) {
      case 'id-1':
        return 'var( --color-blue)';
      case 'id-2':
        return 'var(--color-red)';
      case 'id-3':
        return 'var( --color-green)';
      case 'id-4':
        return 'var(  --color-orange)';
      case 'id-5':
        return 'var( --color-sweet)';
      default:
        return 'whithe';
    }
  }};
`;
export const Label = styled.span`
  margin: 10px 0 0px 0;
`;
export const Percentage = styled.span``;
