import IMMenuList from '../IMMenuList';
import IMProfileAvatar from '../IMProfileAvatar';
import Layout from '../Layout';
import ToolBar from '../ToolBar';
import React from 'react'
import IMMainContainer from '../IMMainContainer';
import TextsmsIcon from '@material-ui/icons/Textsms';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PropTypes from 'prop-types';

const IMLayout = ({
    children,
    user,
    menuList
}) => {
    return(
        <Layout>
            <ToolBar position="fixed">
                <IMProfileAvatar user = {user}></IMProfileAvatar>
                <IMMenuList menuList = {menuList}></IMMenuList>
            </ToolBar>
            <IMMainContainer>
                {children}
            </IMMainContainer>
        </Layout>
    )
}

IMLayout.defaultProps = {
    menuList: [
        {
            menu: <TextsmsIcon/>,
            path: "/chat"
        },
        {
            menu: <VideoCallIcon/>,
            path: "/meeting"
        }
    ],
    user: {
        email:"user@zkteco.in", 
        profile: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
    }
        
}

IMLayout.propTypes = {
    children: PropTypes.node,
    menuList: PropTypes.arrayOf({
        menu: PropTypes.element,
        path: PropTypes.string
    })
}

export default IMLayout;