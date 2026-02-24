import styled from "@emotion/styled";

export const PageWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: azure;
`;

export const Container = styled.div`
  max-width: 960px;

  @media (max-width: 950px) {
    max-width: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div`
  width: 450px;
  height: 150px;
  padding: 20px;
  border-radius: 10px;
  background-color: cornsilk;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
  }
`;

export const CardTitle = styled.h2`
  font-size: 24px;
`;

export const CardText = styled.p`
  font-size: 20px;

  & span {
    font-weight: bold
  }
;
`;