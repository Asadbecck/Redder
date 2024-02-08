import React from 'react';
import { Van, circle, flag, Line } from '../../assets/CardImg';

const CardForBaggage = ({ Title, NumOfcards, FromDest, ToDest, toCountry, fromCountry }) => {
    return (
        <>
            <div className=" rounded-xl p-5 border-2 border-[#FAAD52] bg-[#2C2D2F] w-[420px]">
                <div className="flex  text-center justify-between">
                    <h1 className="text-white pr-[100px] pl-1 text-[26px]">{Title}</h1>
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
                <br />
                <hr className="border-[#FAAD52] h-2" />
                <div className="flex items-center">
                    <img src={Van} alt="png" />
                    <h1 className="text-[16px] pt-2 text-[#C1C1C1]">Тентованный</h1>
                </div>
            </div>
        </>
    );
};

export default CardForBaggage;
