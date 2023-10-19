import { OneItem } from './OneItem';
import {
  StyledTable,
  StyledThead,
  StyledTBody,
  StyledTh,
  StyledTheadWrapper,
} from './TransactionsHistory.styled';

export const Transactions = ({ items }) => {
  return (
    <StyledTable>
      <StyledTheadWrapper>
        <StyledThead>
          <StyledTh>Type</StyledTh>
          <StyledTh>Amount</StyledTh>
          <StyledTh>Currency</StyledTh>
        </StyledThead>
      </StyledTheadWrapper>

      <StyledTBody>
        {items.map((item, idx) => {
          return <OneItem {...item} key={item.id} index={idx} />;
        })}
      </StyledTBody>
    </StyledTable>
  );
};
