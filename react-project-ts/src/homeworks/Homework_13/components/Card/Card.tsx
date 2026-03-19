import {
  CardContainer,
  BackGroundWrapper,
  Background,
  Foreground,
  UserFullName,
} from "./styles.ts";
import Message from "homeworks/Homework_13/components/Message/Message.tsx";

export default function Card() {
  return (
    <CardContainer>
      <BackGroundWrapper>
        <Background></Background>
        <Foreground>
          <UserFullName>Anatolii Vasylenko</UserFullName>
          <Message />
        </Foreground>
      </BackGroundWrapper>
    </CardContainer>
  );
}
