import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 200px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledOnline = styled.span`
  background-color: ${({ $isOnline }) => ($isOnline ? '#008000' : '#ff0000')};
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
`;
