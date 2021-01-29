import React from 'react';
import TextsmsIcon from '@material-ui/icons/Textsms';
import VideoCallIcon from '@material-ui/icons/VideoCall';
 
const initialState = {
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
 
export default function (state = initialState,action){
    alert("hi reducer");
    return initialState;
}