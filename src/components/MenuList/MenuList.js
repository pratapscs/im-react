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
    contact, ...props}) => {
    
    const returnContact = () => {
        onClick(contact)
    };
    return (
        <Fragment>
            <List className="im-menu-list" component="nav" aria-label="main mailbox folders">
                <ListItem onClick={returnContact} style={{background:bgColor, color:color, width:width, height:height}}>
                    <ListItemAvatar>
                        <IMAvatar variant="circular" src={contact.profile}/>
                    </ListItemAvatar>
                    <ListItemText primary={contact.name} secondary={contact.message} style={{color:titleColor}} />
                    <ListItemText secondary={contact.time} style={{textAlign:textAlign, color:timeColor}} />
                    {props.children}
                </ListItem>
            </List>
        </Fragment>
    );
}

MenuList.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
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
    height: PropTypes.string
};

MenuList.defaultProps = {
    contact:{
        name: 'Default',
        message: 'This is default message',
        profile: '',
        time: '10:10'
    },
    bgColor: '#f5f7fa',
    color: '#fff',
    titleColor: '#304669',
    title: 'Miracy',
    desc: 'Miracy invited Zhong Wenkang to join the..',
    descColor: '#7c8d9d',
    time: '15:35',
    textAlign: 'right',
    timeColor: '#bfccd7',
    onClick: (data) => alert(data)
};

export default MenuList;
