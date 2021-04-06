import { ChangeEvent, FC } from "react";

// Styles
import {
  Label,
  SelectField,
  SelectContainer
} from "./style";

interface IProps {
  value?: string;
  type?: "text" | "email" | "number" | "date" | "password";
  label?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  onSetValue?: Function;
  options: string[];
}

const Select: FC<IProps> = ({
  label,
  name,
  placeholder,
  value,
  required,
  onSetValue,
  options,
}) => {
  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    if (onSetValue) {
      onSetValue(event.target.value);
    }
  }

  function renderLabel() {
    if (label) {
      return (<Label htmlFor="cardInput">{label}</Label>);
    }
  }

  return (
    <SelectContainer>
      {renderLabel()}

      <SelectField
        value={value}
        name={name}
        required={required}
        defaultValue={placeholder}
        onChange={(e) => handleSelect(e)}
      >
        <option disabled value={placeholder}>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </SelectField>
    </SelectContainer>
  );
};

export default Select;
