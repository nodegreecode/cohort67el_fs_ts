import styled from "@emotion/styled";

export const BlogManagementContainer = styled.article`
  width: 620px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BlogMessage = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  resize: none;
  font-size: 16px;
  text-align: justify;
`;

export const BlogMessageLabel = styled.label`
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

export const GroupControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
