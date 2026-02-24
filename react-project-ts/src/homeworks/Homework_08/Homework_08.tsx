import { PageWrapper, ItemsContainer, GroupControl } from "./styles.ts";
import {v4} from "uuid";
import Input from "components/Input/Input.tsx";
import Button from "components/Button/Button.tsx";

export default function Homework_08() {
  return (
    <PageWrapper>
      <ItemsContainer>
        <GroupControl>
          <Input
            id={v4()}
            name="user"
            label="User Name"
            placeholder="Enter your name"
            type="text"
          />
        </GroupControl>
        <GroupControl>
          <Input
            id={v4()}
            name="amount"
            label="Payment amount"
            placeholder="Enter disired amount"
            type="text"
            disabled
          />
        </GroupControl>
        <GroupControl>
          <Input
            id={v4()}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            error={"Password is required"}
          />
        </GroupControl>
        <GroupControl>
          <Button name="Save" onClick={() => console.log("Save Button")} />
        </GroupControl>
        <GroupControl>
          <Button
            name="Cancel"
            isDelete
            onClick={() => console.log("Cancel Button")}
          />
        </GroupControl>
        <GroupControl>
          <Button
            name="Remove"
            disabled
            onClick={() => console.log("Remove Button")}
          />
        </GroupControl>
      </ItemsContainer>
    </PageWrapper>
  );
}
