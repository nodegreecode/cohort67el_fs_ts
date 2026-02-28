import { PageWrapper, ActivityPlanner } from "./styles.ts";
import { v4 } from "uuid";
import { Activity, useState } from "react";
import Input from "components/Input/Input.tsx";
import Button from "components/Button/Button.tsx";

export default function Homework_09() {
  const [activity, setActivity] = useState<string>("");
  const [notes, setNotes] = useState<string[]>([]);

  const handleOnChane = (event) => {
    setActivity(event.target.value);
  };

  const handleAddNote = () => {
    if(activity !== "") {
      setNotes((prevValue) => [...prevValue, activity]);
      setActivity("");
    }


  };
  return (
    <PageWrapper>
      <ActivityPlanner>
        <h2>Activities</h2>
        <Input
          onChange={handleOnChane}
          value={activity}
          id={v4()}
          name="note"
          label="Note"
          placeholder="Enter your note"
        />
        <Button name="Add" onClick={handleAddNote} />
        <ul>
          {notes.map((note: string) => (
            <li key={v4()}>
              <p>{note}</p>
            </li>
          ))}
        </ul>
      </ActivityPlanner>
    </PageWrapper>
  );
}
