import {
  PageWrapper,
  EmployeesCard,
  EmployeesDataWrapper,
  GroupControl,
  EmployeesDataLabel,
  EmployeesData,
} from "./styles.ts";
import { MainContext } from "pages/UserManagement/components/Layout/context.ts";
import { useContext } from "react";

export default function Employees() {
  const { employeeData } = useContext(MainContext);
  console.log(employeeData);
  return (
    <PageWrapper>
      {!!employeeData && (
        <EmployeesCard>
          <EmployeesDataWrapper>
            <GroupControl>
              <EmployeesDataLabel>Name</EmployeesDataLabel>
              <EmployeesData>{employeeData?.name}</EmployeesData>
            </GroupControl>
            <GroupControl>
              <EmployeesDataLabel>Surname</EmployeesDataLabel>
              <EmployeesData>{employeeData?.surname}</EmployeesData>
            </GroupControl>
            <GroupControl>
              <EmployeesDataLabel>Age</EmployeesDataLabel>
              <EmployeesData>{employeeData?.age}</EmployeesData>
            </GroupControl>
            <GroupControl>
              <EmployeesDataLabel>Job Position</EmployeesDataLabel>
              <EmployeesData>{employeeData?.job}</EmployeesData>
            </GroupControl>
          </EmployeesDataWrapper>
        </EmployeesCard>
      )}
    </PageWrapper>
  );
}
