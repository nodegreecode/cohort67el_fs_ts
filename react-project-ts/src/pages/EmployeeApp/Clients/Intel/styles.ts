import styled from "@emotion/styled";

export const PageWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const CompanyCard = styled.article`
  width: 620px;
  padding: 32px 48px;
  border-radius: 10px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CompanyTitle = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`;

export const CompanyInfo = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 32px;
  text-align: justify;
`;