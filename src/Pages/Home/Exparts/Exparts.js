import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expart from '../Expart/Expart';

const experts = [
    { id: 1, name: "will Smith", img: expert1 },
    { id: 2, name: "Chris Rock", img: expert2 },
    { id: 3, name: "Dwayne Rock", img: expert3 },
    { id: 4, name: "Massy Vai", img: expert4 },
    { id: 5, name: "Ronaldo bro", img: expert5 },
    { id: 6, name: "Tahminas Friend", img: expert6 }

]

const Exparts = () => {
    return (
        <div id="Experts" className='container mt-5'>
            <h1 className='text-primary text-center'>Ours Experts</h1>
            <div className="row ">
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expert={expert}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;