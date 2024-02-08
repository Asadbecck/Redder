import React from 'react';
import { Instagram, Gmail, Facebook, ApplePlay, GooglePlay } from '../../assets/Footer';
const FooterImg = [Gmail, Instagram, Facebook];
const Footer = () => {
    return (
        <>
            <footer className="container mt-auto">
                <div className="flex items-center justify-around">
                    <div>
                        <h1 className="text-[15px] text-red-400">About us</h1>
                        <p className="text-[#676767] text-[12px] w-[400px]">
                            An artist is a person who creates art. This word is used most often for
                            persons and activities of `high culture`.
                        </p>
                    </div>
                    {/* this is about us section */}
                    <div>
                        <h1 className="text-[15px] text-red-400">Contact us</h1>
                        <div className="flex items-center justify-center gap-1">
                            {FooterImg.map((val, i) => {
                                return (
                                    <>
                                        <div
                                            key={val}
                                            className={
                                                i == 0
                                                    ? `p-[6px] border border-white bg-white rounded-md`
                                                    : i == 2
                                                      ? `border border-[#1877F2] bg-[#1877F2] rounded-md items-center	p-[5px]`
                                                      : `border-none`
                                            }
                                        >
                                            <img src={FooterImg[i]} alt="" />
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    {/* this is contacts section */}
                    <div>
                        <h1 className="text-[15px] text-red-400">Download our app</h1>
                        <div className="flex items-center gap-2">
                            <img src={GooglePlay} alt="png" />
                            <img src={ApplePlay} alt="png" />
                        </div>
                    </div>
                    {/* this is our apps section*/}
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mt-10" />
                <div className="flex items-center justify-between ">
                    <h1 className="text-[#676767] text-[12px] ">
                        2021 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Company Name
                    </h1>
                    <div className="">
                        <h1 className="text-[#676767] text-[12px]">
                            Term & Use &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Privacy policy
                        </h1>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
