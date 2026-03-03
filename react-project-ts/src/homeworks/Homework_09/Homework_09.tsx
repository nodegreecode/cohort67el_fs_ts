import { PageWrapper, ActivityPlanner, ActivityPlannerTitle, GroupControl, Activities, ActivityWrapper, Activity } from "./styles.ts";
import { v4 } from "uuid";
import { type ChangeEvent, useState } from "react";
import Input from "components/Input/Input.tsx";
import Button from "components/Button/Button.tsx";

export default function Homework_09() {
  const [activity, setActivity] = useState<string>("");
  const [notes, setNotes] = useState<string[]>([]);

  const handleOnChane = (event: ChangeEvent<HTMLInputElement>) => {
    setActivity(event.target.value);
  };

  const handleAddNote = () => {
    if (activity !== "") {
      setNotes((prevValue) => [...prevValue, activity]);
      setActivity("");
    }
  };
  return (
    <PageWrapper>
      <ActivityPlanner>
        <ActivityPlannerTitle>Activities Planner</ActivityPlannerTitle>
       <GroupControl>
        <Input
          onChange={handleOnChane}
          value={activity}
          id={v4()}
          name="activity"
          label="Activity"
          placeholder="Enter your activity"
        />
        <Button name="Add" onClick={handleAddNote} />
        </GroupControl>
        <Activities>
          {notes.map((note: string) => (
            <ActivityWrapper key={v4()}>
              <Activity>{note}</Activity>
            </ActivityWrapper>
          ))}
        </Activities>
      </ActivityPlanner>
    </PageWrapper>
  );
}
