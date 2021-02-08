import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IMIcon from '../IMIcon';
import IMListItemIcon from '../IMListItemIcon';
import IMListItemText from '../IMListItemText';
import IMListItemSecondaryAction from '../IMListItemSecondaryAction';
import { Divider } from '@material-ui/core';

function IMList({ component, dense, disablePadding, height, width, bgColor, color, onClick, button, itemTitle, itemSubtitle,  fontSize, icon1, icon2, id, ...props }) {
    return (
        <Fragment>
            <List className="im-profile" component={component} dense={dense} disablePadding={disablePadding} aria-label="Member profile" >
                <ListItem button={button} onClick={onClick} id={id} style={{ background: bgColor, color: color, width: width, height: height }}>
                     <IMListItemIcon><IMIcon icon={icon1} size="20" color="#36C96D"></IMIcon></IMListItemIcon>
                     <IMListItemText primary={itemTitle} secondary={itemSubtitle}  ></IMListItemText>
                     <IMListItemSecondaryAction><IMIcon icon={icon2} size="20"></IMIcon></IMListItemSecondaryAction>
                     <Divider/>
                    {props.children}
                </ListItem>
            </List>
        </Fragment>
    ) 
}

IMList.propTypes = {
    onClick: PropTypes.func,
    button: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    component: PropTypes.elementType,
    dense: PropTypes.bool,
    disablePadding: PropTypes.bool,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    itemTitle: PropTypes.string,
    itemSubtitle: PropTypes.string,
    fontSize: PropTypes.string,
    icon1: PropTypes.string,
    icon2: PropTypes.string,
    id: PropTypes.number,

}
IMList.defaultProps = {
    button: 'button',
    component: 'nav',
    disablePadding: true,
};
export default IMList;

