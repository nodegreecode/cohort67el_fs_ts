import { ContentInfo, ContentTitle, ContentWrapper } from "./styles.ts";
import { useContext } from "react";
import { MainContext } from "lessons/Lesson_14/components/Main/Main.tsx";
import Button from "components/Button/Button.tsx";

function Content() {
  const { userData, setUserData } = useContext(MainContext);
  console.log(userData);

  const deleteUser = () => setUserData(undefined);
  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      {!!userData && (
        <>
          <ContentInfo>Fullname: {userData?.fullName}</ContentInfo>
          <ContentInfo>Age: {userData?.age}</ContentInfo>
          <ContentInfo>Job: {userData?.jobPosition}</ContentInfo>
          <Button isDelete={true} name="Delete User" onClick={deleteUser} />
        </>
      )}
    </ContentWrapper>
  );
}

export default Content;
