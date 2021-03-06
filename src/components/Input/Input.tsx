import { ChangeEvent, FC } from "react";

// Styled components
import {
  InputContainer,
  Label,
  InputField,
  InputBox,
  InputIconBox,
  InputMaskedField
} from "./style";

interface IProps {
  value?: string;
  type?: "text" | "email" | "number" | "date" | "password";
  label?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  onSetValue?: Function;
  mask?: string | string[];
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
  mask
}) => {
  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    if (onSetValue) {
      onSetValue(event.target.value);
    }
  }

  function renderLabel() {
    if (label) {
      return (<Label htmlFor="cardInput">{label}</Label>);
    }
  }

  function renderInput() {
    if(mask) {
      return (
        <InputMaskedField
          mask={mask}
          type={type ?? "text"}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleInput}
          required={required}
        />
      );
    }
    else {
      return (
        <InputField
          type={type ?? "text"}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleInput}
          required={required}
        />
      );
    }
  }

  return (
    <InputContainer className="input-box">
      { renderLabel() }
      <InputBox>
        { renderInput() } 
        { children && <InputIconBox>{children}</InputIconBox> }
      </InputBox>
    </InputContainer>
  );
};

export default Input;
