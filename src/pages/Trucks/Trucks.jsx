import React from 'react';
import CardForAvto from '../../UI/CustomUIUx/CardForAvto';

const Trucks = () => {
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div>
                    <CardForAvto Checked={true} Title={'Грузовики'} />
                </div>
            </div>
            ;
        </>
    );
};

export default Trucks;
