import styled from "@emotion/styled";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background-color: azure;
  height: 100vh;
`;

export const ActivityPlanner = styled.article`
  width: 450px;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: lightyellow;
 
`;

export const ActivityPlannerTitle = styled.h2`
    margin-bottom: 10px;
`;

export const GroupControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Activities = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
`;

export const ActivityWrapper = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: lightpink;
`;

export const Activity = styled.p`
  font-size: 18px;
`;