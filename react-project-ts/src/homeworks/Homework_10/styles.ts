import styled from "@emotion/styled";

export const PageWrapper = styled.section`
display: flex;
  justify-content: center;
  align-items: baseline;
  //flex: 1;
  padding-top: 100px;
  height: 100vh;
  background-color: azure;
`;

export const Card = styled.article`
  width: 600px;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: white;
`;

export const GroupControl = styled.div`
display: flex;
`;

export const CardTitle = styled.div`
flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const ButtonControl = styled.div`
  flex-basis: 50%;
`;

export const ContainerJokes = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const JokeElement = styled.li`
`;

export const Message = styled.p`
  text-align: center;
  font-size: 20px;
  padding: 10px;
  color: red;
`;