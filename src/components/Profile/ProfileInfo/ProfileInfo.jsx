import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + discription
            </div>
        </div>
    );
}

export default ProfileInfo;