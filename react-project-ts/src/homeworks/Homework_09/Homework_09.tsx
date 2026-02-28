import { PageWrapper } from "./styles.ts";
import { v4 } from "uuid";
import {   useState } from "react";
import Input from "components/Input/Input.tsx";
import Button from "components/Button/Button.tsx";

export default function Homework_09() {
  const [notes, setNotes] = useState<string[]>([]);

  const handleOnChane = (event)=>{
    console.log("handleOnChane", event.target.value);
  }

  const handleAddNote = ()=>{

  }
  return (
    <PageWrapper>
      <div>
        <Input
          onChange={handleOnChane}
          id={v4()}
          name="note"
          label="Note"
          placeholder="Enter your note"
        />
        <Button name="Add" onClick={() => console.log("Add")} />
        <ul>
          {notes.map((note:string) => (
            <li key={v4()}>
              <p>{note}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
}
