import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({
    text,
    toPath,
    textStyle,
    borderNavlinkStyle,
    imgNavLink,
    linkImgStyle,
    linkTextStyle,
    activeImg,
    activeText,
}) => {
    return (
        <div className="flex justify-between">
            <NavLink
                to={toPath}
                className={({ isActive }) => (
                    'flex items-center', borderNavlinkStyle, !isActive ? linkTextStyle : activeText
                )}
            >
                <div className="flex ">
                    <img
                        // src={(isActive) => (!isActive ? imgNavLink : activeImg)}
                        src={imgNavLink}
                        className={linkImgStyle}
                    />
                    {text}
                </div>
            </NavLink>
        </div>
    );
};

export default CustomNavLink;
