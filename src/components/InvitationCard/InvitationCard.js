import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import IMIcon from '../IMIcon/IMIcon';
import IMButton from '../IMButton/IMButton';
import './invitation-card.css';
import InviteMedia from '../../assets/images/invite.png';


function InvitationCard({ img, titleColor, subTitleColor, title, subTitle, Button, bgColor, width, height, position, margin, ...props }) {
    const onClick = () => {
        alert('Invite Member');
    };

    const onClose = () => {
    };

    return (
        <Fragment>
            <div className="im-invitation-card" style={{ backgroundColor: bgColor, width: width, height: height, position: position, margin:margin }}
                button={Button}>
                {props.children}
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={2} >
                        <img src={InviteMedia} alt="Invite Member" />
                    </Grid>
                    <Grid item xs={7} >
                        <p className="im-title" style={{ color: titleColor }}><b>{title}</b></p>
                        <p className="im-sub-title" style={{ color: subTitleColor }}>{subTitle}</p>
                    </Grid>
                    <Grid item xs={3} >
                        <div style={{ textAlign: 'center' }}><IMIcon icon="CloseIcon" size="25" onClose={() => onClose()} /></div>
                        <IMButton backgroundColor="#36c96d" size="small" onClick={() => onClick()}>Invite</IMButton>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}
InvitationCard.propTypes = {
    img: PropTypes.string,
    titleColor: PropTypes.string,
    subTitleColor: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    button: PropTypes.string,
    bgColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.string,
    margin: PropTypes.string

};
InvitationCard.defaultProps = {
    width: "25%",
    height: "100px",
    bgColor: "#eef6fc",
    titleColor: "#304669",
    subTitleColor: "#7c8d9d",
    margin: "16px"
};
export default InvitationCard;
