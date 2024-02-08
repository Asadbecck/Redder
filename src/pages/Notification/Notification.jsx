import React from 'react';
import { CustomBtn } from '../../UI/CustomUIUx';
import { useNavigate } from 'react-router-dom';
import Transport from '../Baggage/Transport';

// title, containerStyles, handleClick, btnType, id, children
const Notification = () => {
    const navigate = useNavigate();
    return (
        <>
            <Transport />

            <div className=" mt-[250px] flex items-center justify-center">
                <div className="">
                    <h1 className="text-[#727272] text-bold text-[20px]">
                        У вас пока нет уведомлений
                    </h1>
                    <div className="mx-[70px] my-4">
                        <CustomBtn
                            handleClick={() => navigate('/baggage')}
                            styleBtn={{
                                background:
                                    'radial-gradient(74.18% 134.52% at 50.46% 50%, #FFA740 0%, #FFE977 100%)',
                            }}
                            title={'Добавить +'}
                            containerStyles={'text-white pl-4 py-1 pr-2 rounded-md bg-gray-400 '}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notification;
