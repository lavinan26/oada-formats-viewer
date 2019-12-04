import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={formats}
      getOptionLabel={option => option.title}
      style={{ width: 250 }}
      renderInput={params => (
        <TextField {...params} label="Combo box" variant="outlined" fullWidth />
      )}
    />
  );
}

const formats = [
  { title: "Schema 1" },
  { title: "Schema 2" },
  { title: "Schema 3" }
];
