import styled from "@emotion/styled";

export const CardContainer = styled.div`
  //width: 100%;
  border-radius: 10px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const UserFullName = styled.p`
    font-style: italic;
  margin-bottom: 16px;
`;

export const BackGroundWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const Foreground = styled.div`
  position: relative;
  width: 100%;
  background-color: #B2DFDB;
  border-radius: 10px;
  padding: 30px 50px;
  z-index: 2;
`;