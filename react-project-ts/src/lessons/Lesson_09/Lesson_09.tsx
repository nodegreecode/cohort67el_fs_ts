import { PageWrapper, ContainerFacts, Card, Text } from "./styles";
import Button from "components/Button/Button.tsx";

function Lesson_09() {
  return (
    <PageWrapper>
      {/* <LoginForm /> */}
      <Card>
        <ContainerFacts>
          <Text></Text>
        </ContainerFacts>
        <Button name="Get cat fact" />
      </Card>
    </PageWrapper>
  );
}
export default Lesson_09;
