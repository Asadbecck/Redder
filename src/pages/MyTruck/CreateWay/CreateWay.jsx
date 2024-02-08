import React from 'react';
import { CustomBtn, CustomInput } from '../../../UI/CustomUIUx';

const CreateWay = () => {
    return (
        <div className=" flex justify-center items-center mt-10">
            <label>
                <h1 className="text-white text-[32px] mb-5">Локация*</h1>
                <div className="relative mb-5   ">
                    <CustomInput
                        inputType={'text'}
                        inputStyle={
                            'h-[50px] w-130 text-4xl px-6 bg-black border-2 rounded-lg border-[#36373C] border-opacity-50 outline-none focus:border-[#FAAD52] focus:text-[#FAAD52] transition duration-200'
                        }
                        SpanValue={'Откуда'}
                        spanStyle={
                            'text-xl text-white text-opacity-80 absolute left-0 top-[7px] mx-6 px-2 transition duration-200 input-text-custom'
                        }
                    />
                </div>

                <div className="relative ">
                    <CustomInput
                        inputType={'text'}
                        inputStyle={
                            'h-[50px] w-130 text-4xl px-6 bg-black border-2 rounded-lg border-[#36373C] border-opacity-50 outline-none focus:border-[#FAAD52] focus:text-[#FAAD52] transition duration-200'
                        }
                        SpanValue={'Куда'}
                        spanStyle={
                            'text-xl text-white text-opacity-80 absolute left-0 top-[7px] mx-6 px-2 transition duration-200 input-text-custom'
                        }
                    />
                    <br />
                    <br />
                    <hr className="border-[#36373C] w-[88%]" />
                </div>
                <h1 className="text-white text-[30px] my-5">Транспорт*</h1>

                <div className="relative ">
                    <CustomInput
                        inputType={'text'}
                        inputStyle={
                            'h-[50px] w-130 text-4xl px-6 bg-black border-2 rounded-lg border-[#36373C] border-opacity-50 outline-none focus:border-[#FAAD52] focus:text-[#FAAD52] transition duration-200'
                        }
                        SpanValue={'Выберите транспорт'}
                        spanStyle={
                            'text-xl text-white text-opacity-80 absolute left-0 top-[7px] mx-6 px-2 transition duration-200 input-text-custom'
                        }
                    />
                </div>
                {/* its checkbox */}
                <br />
                <div className="mb-[0.125rem]  block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="checkboxDefault"
                    />
                    <label
                        className="inline-block text-gray-400 pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="checkboxDefault"
                    >
                        Любой транспорт
                    </label>
                </div>
                <br />
                <hr className="border-[#36373C] w-[88%]" />
                <br />

                <h1 className="text-white text-[30px] mb-5">Контакты*</h1>
                <p>Телефон</p>
                <div className="relative mb-5   ">
                    <CustomInput
                        inputType={'text'}
                        inputStyle={
                            'h-[50px] w-130 text-4xl px-6 bg-black border-2 rounded-lg border-[#36373C] border-opacity-50 outline-none focus:border-[#FAAD52] focus:text-[#FAAD52] transition duration-200'
                        }
                        SpanValue={'Откуда'}
                        spanStyle={
                            'text-xl text-white text-opacity-80 absolute left-0 top-[7px] mx-6 px-2 transition duration-200 input-text-custom'
                        }
                    />
                </div>

                <div className="mx-[70px] my-10">
                    <CustomBtn
                        styleBtn={{
                            background:
                                'radial-gradient(74.18% 134.52% at 50.46% 50%, #FFA740 0%, #FFE977 100%)',
                        }}
                        title={'Готово'}
                        containerStyles={'text-white py-3 px-40 rounded-md bg-gray-400 text-[20px]'}
                    />
                </div>
            </label>
        </div>
    );
};

export default CreateWay;
