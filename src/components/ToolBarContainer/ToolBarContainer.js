import React, { Fragment } from "react";
import IMProfileAvatar from "im-react/IMProfileAvatar";
import IMMenuList from "../IMMenuList";
import ToolBar from "im-react/ToolBar";
import { connect } from "react-redux";
import { compose } from 'redux';

const ToolBarContainer = ({
    user,
    menuList
}) => {
    return(
        <Fragment>
            <ToolBar>
                <IMProfileAvatar user = {user}></IMProfileAvatar>
                <IMMenuList menuList = {menuList}></IMMenuList>
            </ToolBar>
        </Fragment>
    );
}

ToolBarContainer.defaultProps = {       
}

ToolBarContainer.propTypes = {
	
};

const mapStateToProps = (state) => ({
	user: state.toolBar.user,
	menuList: state.toolBar.menuList,
});

export default compose(connect(mapStateToProps))(ToolBarContainer);