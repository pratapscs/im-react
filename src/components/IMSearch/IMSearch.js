import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";
import {
    Box,
    IconButton,
    InputAdornment,
    TextField,
    withStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const IMSearch = ({
    color,
    width,
    bgColor,
    borderColor,
    placeholder,
    queryData,
    queryAction,
    getContactSuggestions
}) => {
    const CssTextField = withStyles({
        root: {
            background: bgColor,
            "& label.Mui-focused": {
                color: borderColor
            },
            "& .MuiInput-underline:after": {
                borderBottomColor: borderColor
            },
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: borderColor
                },
                "&:hover fieldset": {
                    borderColor: borderColor
                },
                "&.Mui-focused fieldset": {
                    borderColor: borderColor
                }
            }
        }
    })(TextField);

    const useStyles = makeStyles((theme) => ({
        root: {
            padding: "0px",
            display: "flex",
            alignItems: "center",
            width: width,
            color: color
        },
        iconButton: {
            padding: 5,
            color: "#828899"
        },
        addIconButton: {
            background: bgColor,
            border: "1px solid " + borderColor,
            borderRadius: "5px",
            marginTop: "5px",
            padding: "7px",
            color: "#7c8d9d"
        }
    }));
    const classes = useStyles();

    const [contactSuggestions, setContactSuggestions] = useState([]);
    const [email, setEmail] = useState();
    const getSuggestions = (query) => {
        if (query.length < 3) return false;
        setEmail(query);
        const queryData = getContactSuggestions(query);
        setContactSuggestions(queryData);
    };

    return (
        <div>
            <Box display="flex" flexDirection="row" alignItems="center">
                <Box>
                    <Autocomplete
                        className={classes.root}
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={contactSuggestions}
                        getOptionLabel={(option) => (option ? option.title : "")}
                        onChange={(event, newValue) => {
                            if (newValue != null) queryAction(newValue);
                        }}
                        renderInput={(params) => (
                            <CssTextField
                                {...params}
                                autoFocus="true"
                                name={email}
                                onChange={(e) => getSuggestions(e.target.value)}
                                placeholder={placeholder}
                                size="small"
                                variant="outlined"
                                margin="normal"
                                InputProps={{
                                    ...params.InputProps,
                                    type: "search",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon
                                                fontSize="small"
                                                className={classes.iconButton}
                                            />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        )}
                    />
                </Box>
                <Box p={1}>
                    <IconButton
                        size="small"
                        color="primary"
                        aria-label="add to shopping cart"
                        className={classes.addIconButton}
                    >
                        <AddIcon />
                    </IconButton>
                </Box>
            </Box>
        </div>
    );
};

IMSearch.defaultProps = {
    color: "#828899",
    width: 300,
    bgColor: "transparent",
    borderColor: "#b7c7d6",
    placeholder: "search",
    queryData: [
        { title: "Vinay", email: "vinay@zkteco.in" },
        { title: "Pratap", email: "pratap@zkteco.in" }
    ],
    queryAction: (data) => alert(data.email),
    getContactSuggestions: (query) => {
        return [];
    }
};

IMSearch.propTypes = {};

export default IMSearch;