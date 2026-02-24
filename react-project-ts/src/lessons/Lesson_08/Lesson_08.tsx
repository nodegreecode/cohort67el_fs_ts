import Button from "components/Button/Button.tsx";
import { PageWrapper, Paragraph, ButtonControl } from "./styles.ts";

export default function Lesson_08() {
  return (
    <PageWrapper>
      <Paragraph className="paragraph">LESSON 08</Paragraph>
      <ButtonControl>
        <Button onClick={()=>console.log("Hello")} name="Simple Button" />
      </ButtonControl>
      <ButtonControl>
        <Button isDelete onClick={()=>console.log("Hello")} name="Delete Button" />
      </ButtonControl>
      <ButtonControl>
        <Button disabled onClick={()=>console.log("Hello")} name="Disabled Button" />
      </ButtonControl>
    </PageWrapper>
  );
}
