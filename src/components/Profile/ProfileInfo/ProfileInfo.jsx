import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader.js";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/s1200.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
    profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
    saveProfile,
}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    return (
        <div className={s.descriptionBlock}>
            <div className={s.blockLeft}>
                <img
                    src={profile.photos.large || userPhoto}
                    className={s.mainPhoto}
                    alt=""
                />
                <div>
                    <span className={s.inputFile}>
                        {isOwner && (
                            <div>
                                <input type="file" onChange={onMainPhotoSelected} name="file" id="file" className={s.inputfile} />
                                <label for="file">изменить фото</label>
                            </div>
                        )}
                    </span>
                </div>
                <div><br/>
                    <ProfileStatusWithHooks
                        status={status}
                        updateStatus={updateStatus}
                    />
                </div>
            </div>
            <div className={s.blockRight}>
                <div>
                    {editMode ? (
                        <ProfileDataForm
                            initialValues={profile}
                            profile={profile}
                            onSubmit={onSubmit}
                        />
                    ) : (
                            <ProfileData
                                goToEditMode={() => {
                                    setEditMode(true);
                                }}
                                profile={profile}
                                isOwner={isOwner}
                            />
                        )}
                </div>
            </div>
        </div>
    );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            <div>
                <span className={s.titleText} >Имя: </span> {profile.fullName}
            </div>
            <div>
                <span className={s.titleText}>Ищу работу: </span>{" "}
                {profile.lookingForAJob ? "Да" : "Нет"}
            </div>
            {profile.lookingForAJob && (
                <div>
                    <span className={s.titleText} >Профессиональные навыки: </span>{" "}
                    {profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <span className={s.titleText}>Профессиональный уровень: </span>{profile.aboutMe}
            </div>
            <div>
                <span className={s.titleText} >Контакты:</span>
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key]}
                        />
                    );
                })}
            </div>
            {isOwner && (
                <div className={s.buttonGoToEditMode}>
                    <button onClick={goToEditMode}>редактировать</button>
                </div>
            )}
        </div>
    );
};

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contact}>
            <span className={s.titleText} >{contactTitle}: </span> {contactValue}
        </div>
    );
};

export default ProfileInfo;
