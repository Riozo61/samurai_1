import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src="https://nebambi.ru/images/genshin-impact/update/obnovlenie-2-0/inadzuma-1.webp" />
			</div>
			<div className={s.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
};

export default ProfileInfo;