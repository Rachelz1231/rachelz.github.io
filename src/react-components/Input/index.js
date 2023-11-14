import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import "./styles.css";

/* Component for the Input field, a wrapper around MUI TextField */
class Input extends React.Component {
  render() {
    const { label, value, onChange, name } = this.props;

    return (
      <Grid item xl={3} lg={3} md={4} s={12} xs={12}>
        <TextField
          name={name}
          label={label}
          defaultValue={value || ""}
          className="input"
          margin="normal"
          onChange={onChange}
        />
      </Grid>
    );
  }
}

export default Input;
