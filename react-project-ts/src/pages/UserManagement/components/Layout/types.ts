import { type Dispatch, type SetStateAction, type ReactNode } from "react";

export interface EmployeeData {
  name: string;
  surname: string;
  age: string;
  job: string;
}

export interface EmployeeDataContext {
  employeeData: EmployeeData | undefined;
  fetchEmployeeData: Dispatch<SetStateAction<EmployeeData | undefined>>;
}

export type LayoutProps = {
  children: ReactNode;
};