import React from 'react';
import Preview from './Preview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';


const CardMaker = () => {
    return(
        <main class="main">
            <Preview/>
            <Design/>
            <Fill/>
            <Share/>
        </main>
    );
}

export default CardMaker;