import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../../UI/CustomUIUx/CustomInput';
import { Input_text } from '../../../utils/Constant';
import { CustomBtn } from '../../../UI/CustomUIUx';
import { Link } from 'react-router-dom';
import { prof, block, eye } from '../../../assets/registration';
import { Logo_One, first_logo } from '../../../assets/Logo';
const imgs = [prof, block, eye];

const Registration = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();
    const [show, setShow] = useState(true);

    const onSubmit = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            throw new Error();
            console.log(data);
        } catch (error) {
            setError('text', {
                message: 'oops..',
            });
        }
    };

    const toggle = () => {
        setShow(!show);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-start ml-5 items-center relative">
                    <img className="w-20" src={first_logo} alt="png" />
                    <img className="w-40" src={Logo_One} alt="png" />
                </div>
                <div className="text-center mt-[20px]">
                    <h1 className="text-[30px] text-white font-bold">Добро пожаловать</h1>
                    <p className="text-[#888888] text-[16px] font-normal">
                        Пожалуйста введите ник чтобы продолжить
                    </p>
                </div>
                <div className="mt-10 ml-5">
                    <>
                        <div className=" flex flex-col gap-2">
                            <div className="relative">
                                <input
                                    {...register('text', {
                                        required: 'Name is required',
                                    })}
                                    placeholder={'Введите ФИО'}
                                    className="bg-[#2C2D2F] text-[#FFFFFF] text-[13px] focus:text-[#FFFFFF] rounded-md my-1 px-[60px] py-5"
                                />
                                <img
                                    src={imgs[0]}
                                    alt="png"
                                    className={`w-6 h-5.5 absolute ml-4 ${
                                        errors.text ? `bottom-[46px]` : `bottom-[22px]`
                                    }`}
                                />
                                {errors.text && (
                                    <h1 className="text-red-500 text-[14px]">
                                        {errors.text.message}
                                    </h1>
                                )}
                            </div>

                            <div className="relative">
                                <input
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 8,
                                            message: 'Password must have at least 8 characters',
                                        },
                                    })}
                                    placeholder={'Пароль'}
                                    className="bg-[#2C2D2F] text-[#FFFFFF] text-[13px] focus:text-[#FFFFFF] rounded-md my-1 px-[60px] py-5"
                                />
                                <img
                                    src={imgs[1]}
                                    alt="png"
                                    className={`w-6 h-5.5 absolute ml-4 ${
                                        errors.password ? `bottom-[42px]` : `bottom-[22px]`
                                    }`}
                                />

                                <div className="w-6 h-[20px] absolute ml-[250px] bottom-[25px]">
                                    <button className="">
                                        {/* <img src={imgs[2]} alt="png" className="" />     */}
                                    </button>
                                </div>
                                {errors.password && (
                                    <h1 className="text-red-500 text-[14px]">
                                        {errors.password.message}
                                    </h1>
                                )}
                            </div>
                        </div>
                    </>
                    <p className="text-[#7E7E7E] mr-5 text-center">
                        Авторизуясь, вы соглашаетесь c{' '}
                        <span>
                            <br />
                            <a className="text-[#FF4B26] underline decoration-[#FF4B26]" href="#">
                                Terms of Use
                            </a>
                            {'  '} и{'  '}
                            <a className="text-[#FF4B26] underline decoration-[#FF4B26]" href="#">
                                Privacy Policy
                            </a>
                        </span>
                    </p>
                    {/* title, containerStyles, handleClick, btnType, id, children, styleBtn  */}
                    <div>
                        <CustomBtn
                            disabled={isSubmitting}
                            handleClick={handleSubmit(onSubmit)}
                            title={isSubmitting ? 'Loading' : 'Submit'}
                            containerStyles={
                                'px-[95px] py-3 mt-5 ml-3  text-[20px] text-[#FFFFFF] rounded-md'
                            }
                            styleBtn={{
                                background:
                                    'linear-gradient(129.93deg, #FAAD52 11.21%, #FFEA7F 83.22%',
                            }}
                        />
                    </div>
                    <section className="text-center mt-5">
                        <h1 className="text-[#7E7E7E] text-[16px] font-normal">
                            Нет аккаунта?{' '}
                            <span className="text-[#FF4B26] text-[16px]">
                                <Link to="/login">Регистрация</Link>
                            </span>
                        </h1>
                    </section>
                </div>
            </form>
        </>
    );
};

export default Registration;
