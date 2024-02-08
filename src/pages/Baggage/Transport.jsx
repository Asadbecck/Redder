import React from 'react';
import CardForBaggage from '../../UI/CustomUIUx/CardForBaggage';

const Transport = () => {
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

export default Transport;
