import styled from "@emotion/styled";

export const MessageContainer = styled.div`
  width: 100%;
  max-height: 300px;
  border-radius: 10px;
  padding: 16px;
  background-color: white;
  overflow: scroll;
`;

export const MessageContent = styled.p`
  text-align: justify;
  font-style: italic;
  line-height: 1.3;
  overflow-wrap: break-word;
`;
