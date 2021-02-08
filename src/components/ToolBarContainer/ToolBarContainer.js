import React, {Fragment} from 'react';
import ToolBar from '../ToolBar';
import IMProfileAvatar from "../IMProfileAvatar";
import IMMenuList from "../IMMenuList";
import TextsmsIcon from '@material-ui/icons/Textsms';
import VideoCallIcon from '@material-ui/icons/VideoCall';

// const ToolBarContainer = () => {
//     return (
//         <Fragment>
//             <ToolBar position="absolute" top="0" left="0">
//                 <IMAvatar margin="17px 17px 64px 17px" variant="circular"></IMAvatar>
//                 <IMAvatar>M</IMAvatar>
//                 <IMAvatar>V</IMAvatar>
//                 <IMAvatar>C</IMAvatar>
//                 <IMAvatar>K</IMAvatar>
//                 <IMAvatar>P</IMAvatar>
//             </ToolBar>
//         </Fragment>
//     );
// }
const ToolBarContainer = ({
    user,
    menuList
}) => {
    return(
        <Fragment>
            <ToolBar position="fixed">
                <IMProfileAvatar user = {user}></IMProfileAvatar>
                <IMMenuList menuList = {menuList}></IMMenuList>
            </ToolBar>
        </Fragment>
    );
}

ToolBarContainer.defaultProps = {
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

export default ToolBarContainer;
