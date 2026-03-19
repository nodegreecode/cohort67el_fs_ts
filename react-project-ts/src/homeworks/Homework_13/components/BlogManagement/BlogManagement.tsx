import { type BlogData } from "./types.ts";
import { type ChangeEvent, useState } from "react";
import {
  BlogManagementContainer,
  BlogMessage,
  BackGroundWrapper,
  BlogMessageLabel,
  Background,
  GroupControl,
  Foreground,
} from "./styles.ts";
import Button from "components/Button/Button.tsx";
import Card from "homeworks/Homework_13/components/Card/Card.tsx";
import { BlogManagementContext } from "../../context/BlogManagementContext.ts";

export default function BlogManagement() {
  const [userInput, setUserInput] = useState<string>("");
  const [blogData, setBlogData] = useState<BlogData | undefined>(undefined);

  const handleUserInput = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setUserInput(event.target.value);

  const handleAddMessage = () => {
    setBlogData({ message: userInput });
    setUserInput("");
  };
  return (
    <BlogManagementContext.Provider value={{ blogData }}>
      <BlogManagementContainer>
        <BackGroundWrapper>
          <Background/>
          <Foreground>
            <GroupControl>
              <BlogMessageLabel>Your Blog Message</BlogMessageLabel>
              <BlogMessage
                onChange={handleUserInput}
                value={userInput}
                name="blogMessage"
                rows={5}
              ></BlogMessage>
            </GroupControl>
            <Button name="Add Message" onClick={handleAddMessage} />
          </Foreground>
        </BackGroundWrapper>
        <Card />
      </BlogManagementContainer>
    </BlogManagementContext.Provider>
  );
}
