const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Deluxe'},
        {id: 2, name: 'Николай'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Даня'},
        {id: 5, name: 'Родион'},
    ],
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Долго ещё?'},
        {id: 3, message: 'Опять???'},
        {id: 4, message: 'Домашку сдела?'},
        {id: 5, message: 'Красаучег!!!'}
    ]
}

const dialogsReduser = (state = initialState, action) => {

switch (action.type) {
    case SEND_MESSAGE:
        let body = action.newMessageBody;
        return {
            ...state,
            messages: [...state.messages, {id: 1, message: body}]
        };
    default:
        return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReduser;