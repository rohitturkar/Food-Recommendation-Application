import React from 'react'
import "./style.css"


export const Menucard = ({ currentData }) => {

    return (
        <div>
            <section className="main-card-cointainer">


                {currentData.map((currElem) => {
                    return (
                        <div>
                            <div className="card-container" key={currElem.id}>
                                <div className="card">

                                    <div className="card-body">

                                        <span style={{ color: "red" }} className="card-author subtle">{currElem.name}</span>
                                        <h2 className="card-title">{currElem.name}</h2>
                                        <span className="card-description subtle">
                                            {currElem.description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>

                                    <img src={currElem.image} className="card-media" />
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </div>
                    )
                })}



            </section>
        </div>
    );

}

