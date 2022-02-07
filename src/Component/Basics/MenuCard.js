import React from 'react'

export default function MenuCard({ menuData }) {

    // console.log(menuData);

    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map((curElem) => {
                    return (

                        <>
                            <div class="container" key={curElem.id}>
                                <div class="row">
                                    <div class="card col-lg-8 col-sm-6">

                                        <div class="card-body">
                                            <span className="card-number card-circle subtle">{curElem.id}</span>
                                            <span className="card-author subtle">{curElem.category}</span>
                                            <h2 className="card-title">{curElem.name}</h2>
                                            <span className="card-description subtle">
                                                {curElem.description}
                                            </span>
                                            <div className="card-read">Read</div>
                                            <img src={curElem.image} alt="images" className="card-media" />
                                            <span className="card-tag subtle"> Order Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>

                    )
                })}
            </section>
        </>

    )
}
