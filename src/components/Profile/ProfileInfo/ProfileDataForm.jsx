import React from "react";
import { reduxForm } from "redux-form";
import {
    createField,
    Input,
    Textarea,
} from "../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <div>Имя:</div>{" "}
                {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <div>Ищу работу:</div>{" "}
                {createField("", "lookingForAJob", [], Input, {
                    type: "checkbox",
                })}
            </div>
            <div>
                <div>Профессиональные навыки:</div>
                {createField(
                    "My professional skills",
                    "lookingForAJobDescription",
                    [],
                    Textarea
                )}
            </div>
            <div>
                <div>Профессиональный уровень:</div>
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <div>Контакты:</div>{" "}
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <div key={key} className={s.contact}>
                            <div>
                                {key}:{" "}
                                {createField(key, "contacts." + key, [], Input)}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={s.buttonGoToEditMode}>
                <button>сохранить</button>
            </div>
        </form>
    );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
    ProfileDataForm
);

export default ProfileDataFormReduxForm;
