import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div><img src="http://ukrssr.com.ua/wp-content/uploads/2015/02/lipova.jpg" alt=""/></div>
            <div className={s.descriptionBlock}>
                <img src="https://scontent.fpoz1-1.fna.fbcdn.net/v/t1.0-9/67814151_469602330539208_4454693341577084928_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=OEcDrPI198gAX_rkqYU&_nc_ht=scontent.fpoz1-1.fna&oh=9073d2ed3b17b78d52c763cb9bd42b9f&oe=5EFD5B3D" alt=""/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;