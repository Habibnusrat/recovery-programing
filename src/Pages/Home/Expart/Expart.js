import React from 'react';



const Expart = ({ expert }) => {

    const { name, img } = expert
    return (
        <div className='gx-5 gy-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card  " style={{ width: "18rm" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>

        </div>
    );
};

export default Expart;