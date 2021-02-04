import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IMcard from '../IMCard';
import IMCardBody from '../IMCardBody';
import IMAvatar from '../IMAvatar';
import IMIcon from '../IMIcon';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import './im-profile.css';
import IMList from '../IMList';


function IMProfile({ title, subTitle, ...props }) {

    // const [open, setOpen] = React.useState(false);
    // const handleClick = () => {
    //     setOpen(!open);
    // };

    return (
        <Fragment>
            <IMcard bgColor="#36C96D">
                <IMCardBody>
                    <GridContainer>
                        <GridItem lg="3">
                            <IMAvatar alt="avatar" variant="circle" width="70px" height="70px">S</IMAvatar><br />
                        </GridItem>
                        <GridItem lg="9">
                            <p className="profile_title">{title}</p>
                            <div className="profile_text">
                                <IMIcon color="#ffffff" icon="corporate" size="20" />
                                <p className="profile_subtitle">{subTitle}</p>
                            </div>
                            {props.children}
                        </GridItem>
                    </GridContainer>
                </IMCardBody>
            </IMcard>
            <IMcard>
                <IMCardBody>
                    <IMList icon1="contacts" itemTitle="Personal Information" icon2="ExpandLessIcon"> </IMList>
                    <IMList icon1="invite" itemTitle="Member Center" icon2="ExpandLessIcon"> </IMList>
                    <IMList icon1="settings" itemTitle="Service Provider Platform" icon2="ExpandLessIcon"> </IMList>
                </IMCardBody>
            </IMcard>
        </Fragment>
    )
}

IMProfile.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default IMProfile

