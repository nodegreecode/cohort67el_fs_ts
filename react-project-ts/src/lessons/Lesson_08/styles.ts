import styled from "@emotion/styled";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 100px;
  gap: 30px;
  background-color: aliceblue;
`;

export const Paragraph = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;

  &:hover {
    color: rgba(141, 0, 0, 1);
  }
`;

export const ButtonControl = styled.div`
  width: 300px;
 
`;
