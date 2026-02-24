import "./styles.css";
import { useState } from "react";
import Feedback from "components/Feedback/Feedback";

function Homework_07() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const onLike = () => {
    setLike((prevValue) => {
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };
  return (
    <section className="homework_07-section">
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </section>
  );
}

export default Homework_07;
