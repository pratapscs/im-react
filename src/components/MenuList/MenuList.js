import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {List} from '@material-ui/core';
import {ListItem} from '@material-ui/core';
import {ListItemText} from '@material-ui/core';
import {ListItemAvatar} from '@material-ui/core';
import IMAvatar from '../IMAvatar/IMAvatar';
import './menu-list.css'

const MenuList = ({
    id, 
    width, 
    height, 
    bgColor, 
    color, 
    title, 
    titleColor, 
    desc, 
    descColor, 
    time, 
    timeColor, 
    textAlign, 
    margin, 
    padding, 
    onClick,
    selected,
    button,  ...props}) => {
    return (
        <Fragment>
            <List className="im-menu-list" component="nav" aria-label="main mailbox folders">
                <ListItem selected={selected} button={button}
                    onClick={onClick}style={{background:bgColor, color:color, width:width, height:height}}>
                    <ListItemAvatar>
                        <IMAvatar variant="circular" />
                    </ListItemAvatar>
                    <ListItemText primary={title} secondary={desc} style={{color:titleColor}} />
                    <ListItemText secondary={time} style={{textAlign:textAlign, color:timeColor}} />
                    {props.children}
                </ListItem>
            </List>
        </Fragment>
    );
}

MenuList.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.func,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    desc: PropTypes.string,
    descColor: PropTypes.string,
    time: PropTypes.string,
    timeColor: PropTypes.string,
    textAlign: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    button: PropTypes.string,
};

MenuList.defaultProps = {
    
    color: '#fff',
    titleColor: '#304669',
    title: 'Miracy',
    desc: 'Miracy invited Zhong Wenkang to join the..',
    descColor: '#7c8d9d',
    time: '15:35',
    textAlign: 'right',
    timeColor: '#bfccd7',
    button: 'button',
    // bgColor:'#FFFFFF'

};

export default MenuList;
