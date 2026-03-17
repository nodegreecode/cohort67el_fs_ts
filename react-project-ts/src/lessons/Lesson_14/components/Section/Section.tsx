import Content from "lessons/Lesson_14/components/Content/Content";

import { SectionTitle, SectionWrapper } from "./styles.ts";

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Component</SectionTitle>
      <Content />
    </SectionWrapper>
  );
}

export default Section;
