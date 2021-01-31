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
    },
    contactList: [],
    toContact: {},
    fromContact: {},
    recentContacts: [],
    messageList: [],
    imServiceConfig: {},
    meetingList: [],
    meeting: {},
    meetingParticipents: []
}
 

export default function (state = initialState,action){

    switch (action.type) {
        case "GET_CONTACTS":
            return {
                ...state,
                contactList: action.payload
            };
        case "TO_CONTACT":
            return {
                ...state,
                toContact: action.payload
            };
        case "FROM_CONTACT":
            return {
                ...state,
                fromContact: action.payload
            };
        case "GET_RECENT_CONTACTS":
            return {
                ...state,
                recentContacts: action.payload
            };
        case "GET_MESSAGES":
            return {
                ...state,
                messageList: action.payload
            };
        case "IM_CONFIG":
            return {
                ...state,
                imServiceConfig: action.payload
            };
        case "GET_MEETINGS":
            return {
                ...state,
                meetingList: action.payload
            };
        case "GET_MEETING":
            return {
                ...state,
                meeting: action.payload
            };
        case "GET_MEETING_PARTICIPENTS":
            return {
                ...state,
                meetingParticipents: action.payload
            };
        default:
            return state;
    }
}