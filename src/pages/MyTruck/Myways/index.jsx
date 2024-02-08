import React from 'react';
import { NavLink } from 'react-router-dom';
import CardMyTrucks from '../../../UI/CustomUIUx/CardMyTrucks';

export const MyWays = () => {
    return (
        <>
            <section className="">
                <main className="grid w-[94%] justify-center grid-cols-3">
                    <div></div>
                    <div className="flex justify-center items-center mb-[50px]">
                        <NavLink
                            style={{
                                background:
                                    'linear-gradient(129.93deg, #FAAD52 11.21%, #FFEA7F 83.22%',
                            }}
                            className="px-[55px] py-[2px] mt-5 ml-3  text-[16px] text-[#FFFFFF] rounded-md "
                        >
                            My Ways
                        </NavLink>

                        <NavLink
                            to="/myTrucks"
                            style={{
                                background:
                                    'linear-gradient(129.93deg, #FAAD52 11.21%, #FFEA7F 83.22%',
                            }}
                            className="px-[55px] py-[2px] mt-5 ml-3  text-[16px] text-[#FFFFFF] rounded-md "
                        >
                            My Truck
                        </NavLink>
                    </div>
                    <NavLink
                        to="/createway"
                        style={{
                            background: 'linear-gradient(129.93deg, #FAAD52 11.21%, #FFEA7F 83.22%',
                        }}
                        className="px-[12px] py-[3px] mt-5 mr-[30px] justify-self-end	 self-start	 text-[12px] text-[#FFFFFF] rounded-sm "
                    >
                        Добавить путь +
                    </NavLink>
                    <div></div>
                </main>
                <div className="w-[1200px] flex justify-evenly">
                    <CardMyTrucks
                        Title={'ReddeR LLC'}
                        NumOfcards={12}
                        FromDest={'Алмалык'}
                        ToDest={'Ахангаран '}
                        fromCountry={'Ташкент, Узбекистан'}
                        toCountry={'Ташкент, Узбекистан'}
                    />
                    <CardMyTrucks
                        Title={'ReddeR LLC'}
                        NumOfcards={12}
                        FromDest={'Алмалык'}
                        ToDest={'Ахангаран '}
                        fromCountry={'Ташкент, Узбекистан'}
                        toCountry={'Ташкент, Узбекистан'}
                    />
                </div>
            </section>
        </>
    );
};
