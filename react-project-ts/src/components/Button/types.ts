export interface ButtonProps {
  name?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  isDelete?: boolean;
  disabled?: boolean;
}
