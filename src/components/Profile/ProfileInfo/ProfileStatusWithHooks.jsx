import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span className={s.titleText} >Статус: </span> 
                    <span onDoubleClick={activateEditMode}>
                        {props.status || "-------"}
                        <button onClick={activateEditMode}>изменить статус</button>
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} value={status} />
                    <button onClick={deactivateEditMode}>сохранить</button>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;