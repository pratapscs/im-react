import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const IMSelect = ({ width, queryData, role }) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: width
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>{role}</InputLabel>
        <Select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {queryData.map((fbb) => (
            <MenuItem value={fbb.key}>{fbb.role}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

IMSelect.defaultProps = {
  width: 120,
  role: "Role",
  queryData: [
    { key: "1", role: "host" },
    { key: "2", role: "member" }
  ]
};

IMSelect.propTypes = {};

export default IMSelect;
