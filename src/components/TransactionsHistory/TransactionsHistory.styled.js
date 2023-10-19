import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 400px;
  border-top: 1px solid;
  border-left: 1px solid;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledTheadWrapper = styled.thead`
  width: 100%;
  border-bottom: 1px solid;
  background-color: teal;
`;

export const StyledThead = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StyledTransaction = styled.tr`
  background-color: ${({ $index }) =>
    $index % 2 === 0 ? 'lightgrey' : 'white'};
  border-bottom: 1px solid;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StyledTBody = styled.tbody`
  width: 100%;
`;

export const StyledTh = styled.th`
  text-align: center;
  border-right: 1px solid;
`;

export const StyledTd = styled.td`
  text-align: center;
  border-right: 1px solid;
`;
