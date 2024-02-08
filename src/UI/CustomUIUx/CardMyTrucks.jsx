import React from 'react';
import { Van, circle, flag, Line, photo, phoneTruck } from '../../assets/CardImg';

const CardMyTrucks = ({ Title, NumOfcards, FromDest, ToDest, toCountry, fromCountry }) => {
    return (
        <>
            <div className=" rounded-xl p-5 border-2 border-[#FAAD52]  bg-[#2C2D2F] w-[420px]">
                <div className="flex  text-center justify-between">
                    <div>
                        <h1 className="text-white pr-[10px] pl-1 text-[26px]">{Title}</h1>
                        <h1 className="text-[#C1C1C1] text-[10px] pr-[80px] pl-1">Проверенно ✔️</h1>
                    </div>
                    <div className="rounded-full ml-[150px] w-[60px]   h-[30px] bg-yellow-400">
                        <h1 className="text-white pt-[2px]  text-[16px]">{NumOfcards}</h1>
                    </div>
                    <br />
                    <br />
                </div>
                <hr className="border-[#FAAD52] h-2" />
                <section className="flex">
                    <div className=" flex items-center  justify-center flex-col">
                        <img src={circle} alt="" className="w-[15px] h-[12px]" />
                        <img src={Line} alt="" className="w-[5px] h-[35px]" />
                        <img src={flag} alt="" className="w-[17px] h-[20px]" />
                    </div>
                    <div className="ml-[5px]">
                        <div className="flex items-center justify-around ">
                            <h1 className="text-[20px] text-white">{FromDest}</h1>
                            <h1 className="pl-[210px] text-[#FFFFFF] text-[14px]">07.09.2023</h1>
                        </div>
                        <p className="text-[12px] text-[#C1C1C1]">{fromCountry}</p>
                        <div className="flex items-center justify-around">
                            <h1 className="text-[20px] text-white">{ToDest}</h1>
                            <h1 className="pl-[210px] text-[#FFFFFF] text-[14px]">07.09.2023</h1>
                        </div>
                        <p className="text-[12px] text-[#C1C1C1]">{toCountry}</p>
                    </div>
                </section>
                <hr className="border-[#FAAD52] h-2 my-1" />
                <main className="flex items-center justify-between">
                    <div className="flex items-center pb-1">
                        <img src={Van} alt="png" />
                        <h1 className="text-[16px] pt-2 text-[#C1C1C1]">Тентованный</h1>
                    </div>
                    {/*  */}
                    <div className="">
                        <button
                            className="rounded-full p-[7.5px] mr-3"
                            style={{
                                background: 'rgba(250, 173, 82, 1)',
                            }}
                        >
                            <img src={photo} alt="" />
                        </button>
                        {/*  */}
                        <button
                            className="rounded-full p-[7px]"
                            style={{
                                background: 'rgba(116, 249, 83, 1)',
                            }}
                        >
                            <img src={phoneTruck} alt="" />
                        </button>
                    </div>
                </main>
                <hr className="border-[#FAAD52] h-2 my-2" />
                {/*  */}

                <div className="flex justify-between">
                    <button
                        style={{
                            background:
                                'linear-gradient(129.93deg, #52B3FA 11.21%, #7F84FF 83.22%)',
                        }}
                        className="px-2 py-1 bg-indigo-500 rounded-md"
                    >
                        Promote
                    </button>
                    <button
                        style={{
                            background:
                                'linear-gradient(129.93deg, #FAAD52 11.21%, #FFEA7F 83.22%)',
                        }}
                        className="px-[30px] py-1  rounded-md"
                    >
                        Edit
                    </button>
                    <button
                        style={{
                            background:
                                'linear-gradient(129.93deg, #FA5252 11.21%, #FFAD7F 83.22%)',
                        }}
                        className="px-3 py-1 bg-indigo-500 rounded-md"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default CardMyTrucks;
