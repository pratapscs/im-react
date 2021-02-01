import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";
import { Box, InputAdornment, TextField, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

class IMSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      contactSuggestion: []
    };
  }

  getSuggestions = (data) => {
    if (data.length < this.props.searchIndex) {
      this.setState((state, props) => ({
        contactSuggestion: []
      }));
      return false;
    }

    this.setState((state, props) => ({
      query: data
    }));
    const queryData = this.props.getContactSuggestions(data);
    this.setState((state, props) => ({
      contactSuggestion: queryData
    }));
  };

  render() {
    const CssTextField = withStyles({
      root: {
        background: this.props.bgColor,
        "& label.Mui-focused": {
          color: this.props.borderColor
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: this.props.borderColor
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: this.props.borderColor
          },
          "&:hover fieldset": {
            borderColor: this.props.borderColor
          },
          "&.Mui-focused fieldset": {
            borderColor: this.props.borderColor
          }
        }
      }
    })(TextField);

    const styles = {
      root: {
        padding: "0px",
        margin: "0 16px",
        display: "flex",
        alignItems: "center",
        width: this.props.width,
        color: this.props.color
      },
      iconButton: {
        padding: 5,
        color: "#828899"
      },
      addIconButton: {
        background: this.props.bgColor,
        border: "1px solid " + this.props.borderColor,
        borderRadius: "5px",
        marginTop: "5px",
        padding: "7px",
        color: "#7c8d9d"
      }
    };
    return (
      <div style={{width:"100%"}}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box>
            <Autocomplete
              style={styles.root}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={this.state.contactSuggestion}
              getOptionLabel={(option) => (option ? option.firstName + option.lastName : "")}
              onChange={(event, newValue) => {
                if (newValue != null) this.props.queryAction(newValue);
              }}
              renderInput={(params) => (
                <CssTextField
                  {...params}
                  autoFocus="true"
                  name={this.state.query}
                  onChange={(e) => this.getSuggestions(e.target.value)}
                  placeholder={this.props.placeholder}
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
                          style={styles.iconButton}
                        />
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Box>
        </Box>
      </div>
    );
  }
}

IMSearch.defaultProps = {
  searchIndex: 2,
  color: "#828899",
  width: 300,
  bgColor: "transparent",
  borderColor: "#b7c7d6",
  placeholder: "search",
  queryAction: (data) => alert(data.email),
  getContactSuggestions: (query) => {
    if (!query) return [];
    const queryData = [
      { firstName: "Vinay",lastName:"", email: "vinay@zkteco.in" }
    ];
    const result = queryData.map((data) => {
      if (data.email.includes(query)) {
        return data;
      } else {
        return null;
      }
    });
    return result;
  }
};

IMSearch.propTypes = {
  /** Minimum number of the charcters required for search. */
  searchIndex: PropTypes.number,

  /** Search box text color. */
  color: PropTypes.string,

  /** Search box width */
  width: PropTypes.number,

  /** Search box background color */
  bgColor: PropTypes.string,

  /** Function to call on selecting the value from search result */
  queryAction: PropTypes.func.isRequired,

  /** Function to call on search to get search results */
  getContactSuggestions: PropTypes.func.isRequired,

  /** Search box border color */
  borderColor: PropTypes.string,

  /** Default String to display on seacrh box */
  placeholder: PropTypes.string
};

export default IMSearch;
