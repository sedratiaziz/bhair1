import React from 'react';
import youtubeLong from '../../img/youtubelong.png';
import telegram from '../../img/telegram.png';

function Categ() {
    return (
        <section id="Categories" className="py-5">
            <div className="container">
                {/* FIRST ROW */}
                <div className="row d-flex justify-content-center row-whith-wide-cards text-center pt-4 py-md-2 py-lg-2">
                    <div id="h10" className="hidden col col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                        <div className="card h-100 shadow" id="action">
                            <img alt='anotherimg' src={youtubeLong} id="action_img" className="card-img-top" style={{ height: "14rem" }} />
                            <div className="card-body">
                                <h3 className="card-title py-3">يوتيوب</h3>
                                <hr></hr>
                                <a href="https://www.youtube.com/@Riyadh-787">
                                    <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn28">انتقل</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="h10" className="hidden col col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                        <div className="card h-100 shadow" id="action">
                            <img alt='anotherimg' src={youtubeLong} id="action_img" className="card-img-top" style={{ height: "14rem" }} />
                            <div className="card-body">
                                <h3 className="card-title py-3">يوتيوب</h3>
                                <hr></hr>
                                <a href="https://www.youtube.com/@Riyadh-787">
                                    <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn28">انتقل</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="h10" className="hidden col col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                        <div className="card h-100 shadow" id="action">
                            <img alt='anotherimg' src={youtubeLong} id="action_img" className="card-img-top" style={{ height: "14rem" }} />
                            <div className="card-body">
                                <h3 className="card-title py-3">يوتيوب</h3>
                                <hr></hr>
                                <a href="https://www.youtube.com/@Riyadh-787">
                                    <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn28">انتقل</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* visible only on md screens */}
                    <div id="h10" className="hidden col d-none d-md-block d-lg-none col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                        <div className="card h-100 shadow" id="kids">
                            <img alt='anotherimg' src={telegram} id="kids_img" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title py-3">تلقرام</h3>
                                <hr id="hr_kids"></hr>
                                <a href="https://t.me/Riyadh787">
                                    <button style={{ fontSize: "1.1rem" }} className="bn632-hover islamic">انتقل</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FIRST ROW */}

                {/* SECOND ROW */}
                <div className="row row-whith-wide-cards d-flex justify-content-center text-center py-2">
                    <div id="h10" className="hidden d-md-none d-lg-block d-sm-block col col-12 col-lg-5 col-md-8 col-sm-12 py-3">
                        <div className="card h-100 shadow" id="sci-fi">
                            <img alt='anotherimg' src={telegram} id="sci-fi_img" className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title py-3">تلقرام</h3>
                                <hr id="hr_sci-fi"></hr>
                                <a href="https://t.me/Riyadh787">
                                    <button style={{ fontSize: "1.1rem" }} className="bn632-hover islamic">انتقل</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SECOND ROW */}


            </div>
        </section>
    );
}

export default Categ;
