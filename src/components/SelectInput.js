import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const SelectInput = ({
  label,
  name,
  handleChange,
  value,
  options,
  disabled,
  filterOptions
}) => {
  const ar = [
    filterOptions.planet1,
    filterOptions.planet2,
    filterOptions.planet3,
    filterOptions.planet4
  ];
  const filteredOptions = options.filter(x => ar.indexOf(x.name) === -1);
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        type="select"
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
        disabled={disabled}
      >
        <option value="">Select</option>
        {filteredOptions.map((value, index) => (
          <option value={value.name} key={index}>
            {value.name}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default SelectInput;
