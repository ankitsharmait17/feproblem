import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const RadioInput = ({
  name,
  distance,
  handleChange,
  options,
  filterOptions
}) => {
  const ar = [
    filterOptions.vehicle1,
    filterOptions.vehicle2,
    filterOptions.vehicle3,
    filterOptions.vehicle4
  ];
  const filteredOptions = options.map(x => {
    return { ...x, total_no: x.total_no - ar.filter(v => v === x.name).length };
  });

  return filteredOptions.map((element, index) => (
    <FormGroup key={index} check>
      <Label check key={index}>
        <Input
          type="radio"
          value={element.name}
          name={name}
          onChange={handleChange}
          key={index}
          disabled={element.total_no === 0 || element.max_distance < distance}
        />
        {element.name}({element.total_no})
      </Label>
    </FormGroup>
  ));
};

export default RadioInput;
