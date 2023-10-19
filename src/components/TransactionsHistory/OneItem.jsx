import { StyledTransaction, StyledTd } from './TransactionsHistory.styled';

export const OneItem = ({ type, amount, currency, index }) => {
  return (
    <StyledTransaction $index={index}>
      <StyledTd>{type}</StyledTd>
      <StyledTd>{amount}</StyledTd>
      <StyledTd>{currency}</StyledTd>
    </StyledTransaction>
  );
};
