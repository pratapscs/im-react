import React, { Fragment } from "react";
import {Box,IconButton} from "@material-ui/core";
import Textarea from 'im_react_service/lib/Textarea';
import IMIcon from "im_react_service/lib/IMIcon/IMIcon";

class ChatTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      contactSuggestion: []
    };
  }

  handleChange = (e) => {
    this.setState({
        message:e.target.value
    })
  };

  handleSubmit = () => {
      if(this.state.message){
        this.props.sendMessage(this.state.message)
      } else {
          alert("Please type the message")
      }
  }

  render() {
    return (
        <Fragment>
            <Box style={{ margin: "0 16px" }} width="100%">
                <Textarea width="100%" placeholder="Type a new message" onChange = {this.handleChange}/>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center', position: 'relative', right: '45px' }}>
                <IconButton aria-label="send" onClick = {this.handleSubmit}>
                    <IMIcon icon="send" color={this.props.color} />
                </IconButton>
            </Box>
        </Fragment>
    );
  }
}

ChatTextBox.defaultProps = {
  color: "#828899",
  sendMessage: (data) => alert(data)
};

export default ChatTextBox;
