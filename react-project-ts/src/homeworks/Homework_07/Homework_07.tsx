import {PageWrapper} from "./styles.ts";
import { useState } from "react";
import Feedback from "components/Feedback/Feedback";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onDislike = (): void => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };
  return (
    <PageWrapper >
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </PageWrapper>
  );
}

export default Homework_07;
