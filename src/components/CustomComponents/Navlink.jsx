import React from 'react';
import CustomNavLink from '../../UI/CustomUIUx/CustomNavLink';
import { NavLinks } from '../../utils/Constant';
import { glass, truck, cargo, myTRuck, profile } from '../../assets/NavLink_Imgs';
const logoImg = [glass, truck, cargo, myTRuck, profile];

const Navlink = React.memo(() => {
    return (
        <>
            <div className="flex items-center justify-evenly mt-10">
                {NavLinks.map((val, i) => (
                    <CustomNavLink
                        key={val.id}
                        imgNavLink={logoImg[i]}
                        linkImgStyle={'px-[12px] pb-[5px] w-[45px]'}
                        text={val.link}
                        toPath={val.path}
                        linkTextStyle={'text-white  text-[16px]'}
                        borderNavlinkStyle={'flex justify-between items-center'}
                        activeText={'text-[#FAAD52]'}
                    />
                ))}
            </div>
            <center>
                <hr className=" w-[82%] mt-3 " />
            </center>
        </>
    );
});

export default Navlink;

//  UI > component > page
