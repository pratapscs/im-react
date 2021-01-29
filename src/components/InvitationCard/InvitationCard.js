import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IMIcon from '../IMIcon/IMIcon';
import IMButton from '../IMButton/IMButton';
import './invitation-card.css';
import InviteMedia from '../../assets/images/invite.png';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';


function InvitationCard({bgColor, color, titleColor, subTitleColor, title, subTitle, width, height, margin, padding, ...props}) {
    const onClick = () => {
        alert('Invite Member');
    };

    const onClose = () => {
    };

    return (
        <Fragment>
            <div 
                className="im-invitation-card" 
                style={{
                    background:bgColor, 
                    color:color,
                    width:width, 
                    height:height, 
                    margin:margin,
                    padding:padding
                }}>
                {props.children}
                <GridContainer>
                    <GridItem lg="auto">
                        <img src={InviteMedia} alt="Invite Member" />
                    </GridItem>
                    <GridItem lg="auto">
                        <p className="im-title" style={{color:titleColor}}><b>{title}</b></p>
                        <p className="im-sub-title" style={{color:subTitleColor}}>{subTitle}</p>
                    </GridItem>
                    <GridItem lg="auto" textAlign="center">
                        <IMIcon icon="CloseIcon" size="25" onClose={() => onClose()} />
                        <IMButton background="#36c96d" size="small" onClick={() => onClick()}>Invite</IMButton>
                    </GridItem>
                </GridContainer>
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
    bgColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.string,
    margin: PropTypes.string

};

InvitationCard.defaultProps = {
    width: "100%",
    height: "100px",
    bgColor: "#eef6fc",
    titleColor: "#304669",
    subTitleColor: "#7c8d9d",
    margin: "16px 0"
};

export default InvitationCard;
