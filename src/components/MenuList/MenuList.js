import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {List} from '@material-ui/core';
import {ListItem} from '@material-ui/core';
import {ListItemText} from '@material-ui/core';
import {ListItemAvatar} from '@material-ui/core';
import IMAvatar from '../IMAvatar/IMAvatar';

const MenuList = ({id, width, height, bgColor, color, title, titleColor, desc, descColor, time, timeColor, textAlign, margin, padding, onClick, ...props}) => {
    return (
        <Fragment>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem onClick={onClick} style={{background:bgColor, color:color, width:width, height:height}}>
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
    bgColor: '#f5f7fa',
    color: '#fff',
    titleColor: '#304669',
    title: 'Miracy',
    desc: 'Miracy invited Zhong Wenkang to join the..',
    descColor: '#7c8d9d',
    time: '15:35',
    textAlign: 'right',
    timeColor: '#bfccd7',
    width: '#bfccd7',
    height: '#bfccd7'
};

export default MenuList;
