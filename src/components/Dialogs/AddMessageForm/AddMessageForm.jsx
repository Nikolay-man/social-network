import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from '../../../redux/utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Текст сообщения'
                       name="newMessageBody" />
            </div>
            <div>
                <button>отправить</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);
