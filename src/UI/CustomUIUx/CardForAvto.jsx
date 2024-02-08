import React from 'react';
import CustomInput from './CustomInput';
import { Van } from '../../assets/CardImg';
import CustomBtn from './CustomBtn';

const CardForAvto = ({ Title, Checked }) => {
    return (
        <>
            <div className="rounded-xl p-5 border-2 border-[#FAAD52] bg-[#2C2D2F] w-[450px]">
                <div className="">
                    <h1 className="text-white pr-[100px] text-[22px]">{Title}</h1>
                    <h1 className="text-[#C1C1C1] text-[12px] pl-1">
                        {Checked ? 'Проверенно ✔️' : null}
                    </h1>
                    <br />
                </div>
                <hr className="border-[#FAAD52] h-2" />
                <div className="relative my-3   flex">
                    <CustomInput
                        inputType={'text'}
                        inputStyle={
                            'h-[30px] w-[100px] text-[12] px-6 bg-[#2C2D2F] border-2 rounded-lg border-[#FAAD52] border-opacity-50 outline-none focus:border-[#FAAD52] focus:text-[#FAAD52] transition duration-200'
                        }
                        SpanValue={'Вес : '}
                        spanStyle={
                            'text-[12px] text-white text-opacity-80 absolute left-[-25px] top-[5px] mx-6 px-2 transition duration-200 input-text-custom-sec'
                        }
                    />
                    <CustomInput
                        inputType={'text'}
                        inputStyle={
                            'h-[30px] w-[100px] text-[12] px-6 bg-[#2C2D2F] border-2 rounded-lg border-[#FAAD52] border-opacity-50 outline-none focus:border-[#FAAD52] focus:text-[#FAAD52] transition duration-200'
                        }
                        SpanValue={'Объем: '}
                        spanStyle={
                            'text-[12px] text-white text-opacity-80 absolute left-[75px] top-[5px] mx-6 px-2 transition duration-200 input-text-custom-sec'
                        }
                    />
                </div>

                <div className="flex items-center">
                    <img src={Van} alt="" />
                    <h1 className="text-[16px] pt-2 pl-2 text-[#C1C1C1]">Тентованный</h1>
                </div>
                <br />
                <hr className="border-[#FAAD52] h-2" />
                <br />
                <div className="flex justify-center items-center">
                    <div className="mx-[30px]">
                        <CustomBtn
                            styleBtn={{
                                background:
                                    'radial-gradient(74.18% 134.52% at 50.46% 50%, #FFA740 0%, #FFE977 100%)',
                            }}
                            title={'Edit'}
                            containerStyles={
                                'text-white py-2 px-[60px] rounded-md bg-gray-400 text-[15px]'
                            }
                        />
                    </div>
                    <div className="mx-[30px]">
                        <CustomBtn
                            styleBtn={{
                                background:
                                    'linear-gradient(129.93deg, #FA5252 11.21%, #FFAD7F 83.22%)',
                            }}
                            title={'Delete'}
                            containerStyles={
                                'text-white py-2 px-[60px] rounded-md bg-gray-400 text-[15px]'
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardForAvto;
