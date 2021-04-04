import { ChangeEvent, FC } from "react";

// Styles
import {
  InputContainer,
  Label,
  InputField,
  InputBox,
  InputIconBox,
} from "./style";

interface IProps {
  value?: string;
  type?: "text" | "email" | "number" | "date";
  label?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  onSetValue?: Function;
}

const Input: FC<IProps> = ({
  label,
  name,
  placeholder,
  children,
  value,
  type,
  required,
  onSetValue,
}) => {
  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    if (onSetValue) {
      onSetValue(event.target.value);
    }
  }

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputBox>
        <InputField
          type={type ?? "text"}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleInput}
          required={required}
        />
        <InputIconBox>{children}</InputIconBox>
      </InputBox>
    </InputContainer>
  );
};

export default Input;
