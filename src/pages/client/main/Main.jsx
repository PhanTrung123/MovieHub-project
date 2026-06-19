import React from 'react';
import SliderBanner from '../silders/SliderBanner';
import SliderCountries from '../silders/SliderCountries';

function Main(props) {
    return (
        <div>
            <SliderBanner />
            <div className="bg-[#191b24] text-white">
            <SliderCountries/>
            </div>
        </div>
    );
}

export default Main;