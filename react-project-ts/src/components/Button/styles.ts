import styled from "@emotion/styled";

interface ButtonComponentProps {
  $isDelete: boolean;
  disabled: boolean;
}

const generateButtonColor = (
  isDelete: boolean,
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isDelete) {
      return "#ff6868ff";
    } else {
      return "rgb(82,82,241)";
    }
  }
};

const generateButtonColorOnHover = (
  isDelete: boolean,
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isDelete) {
      return "#fc3333ff";
    } else {
      return "rgb(104, 104, 233)";
    }
  }
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0;
  height: 70px;
  width: 100%;
  /*background-color: ${({ $isDelete }) =>
    $isDelete ? "#ff6868ff" : "rgb(82, 82, 241)"};*/
  background-color: ${({ $isDelete, disabled }) =>
    generateButtonColor($isDelete, disabled)};
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    /*background-color: ${({ $isDelete }) =>
      $isDelete ? "#fc3333ff" : "rgb(104, 104, 233)"};*/
    background-color: ${({ $isDelete, disabled }) =>
      generateButtonColorOnHover($isDelete, disabled)};
  }
`;
