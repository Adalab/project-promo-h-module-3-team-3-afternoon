import React from 'react';
import Preview from './Preview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';


const CardMaker = () => {
    return (
        <main className="main">
            <Preview />
            <form className="form" action="" method="POST">
                <Design />
                <Fill />
                <Share />
            </form>
        </main>
    );
}

export default CardMaker;