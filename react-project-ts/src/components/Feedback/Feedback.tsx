import {FeedbackWrapper, FeedbackControl, ButtonWithCountContainer, Count} from "./styles.ts"
import {type FeedbackProps} from "./types.ts";
import Button from "components/Button/Button.tsx";

function Feedback({like, dislike, onLike, onDislike, resetResults}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonWithCountContainer>
        <ButtonWithCountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonWithCountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
