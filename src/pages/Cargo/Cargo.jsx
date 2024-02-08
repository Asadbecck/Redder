import React from 'react';
import Transport from '../Baggage/Transport';
import CardForBaggage from '../../UI/CustomUIUx/CardForBaggage';

const Cargo = () => {
    return (
        <>
            <div className="h-screen flex justify-evenly items-center">
                <CardForBaggage
                    Title={'Груз'}
                    NumOfcards={12}
                    FromDest={'Алмалык'}
                    ToDest={'Ахангаран '}
                    fromCountry={'Ташкент, Узбекистан'}
                    toCountry={'Ташкент, Узбекистан'}
                />
                <CardForBaggage
                    Title={'Груз'}
                    NumOfcards={12}
                    FromDest={'Алмалык'}
                    ToDest={'Ахангаран '}
                    fromCountry={'Ташкент, Узбекистан'}
                    toCountry={'Ташкент, Узбекистан'}
                />
            </div>
        </>
    );
};

export default Cargo;
