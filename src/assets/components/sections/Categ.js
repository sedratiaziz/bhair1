import React from 'react';
import cncr from '../../img/cncr.jpg';
// In your React component file, e.g., App.js
import '../../fonts/fonts.css';



function Categ() {
    return (
    <section id="Categories" class="py-5">
        <div class="container">   
            <div className="row row-whith-wide-cards d-flex justify-content-center text-center py-0 py-md-2 py-lg-2">
                <div id="h10" className="hidden col col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                    <div className="card h-100 shadow" id="classic">
                        <img alt='animg' src={cncr} id="classic_img" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="crd1 card-title py-3">الكونكورد</h3>
                            <hr id="hr_classNameic"></hr>
                            <p id="pcomplt1" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">تحفة هندسية بريطانية-فرنسية، تتجاوز سرعتها ضعف سرعة الصوت (2.04 ماخ)، تجمع بين الفن والتقنية بتناغم فريد</p>
                            <a href="./pages/topics/concorde.html">
                                <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn25c">أكمل القراءة</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="h10" className="hidden col d-md-none d-lg-block col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                    <div className="card h-100 shadow" id="kids">
                        <img alt='animg' src="" id="kids_img" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title py-3">قيد العمل</h3>
                            <hr id="hr_kids"></hr>
                            <p id="pcomplt2" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">انتظرونا !</p>
                            <a href="../404_page/404_page.html">
                                <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn28">انتقل</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="h10" className="hidden col col-12 col-lg-4 col-md-6 col-sm-12 py-3">
                    <div className="card h-100 shadow" id="sci-fi">
                        <img alt='animg' src="" id="sci-fi_img" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title py-3">قيد العمل</h3>
                            <hr id="hr_sci-fi"></hr>
                            <p id="pcomplt3" className="card-text pt-3 px-4 px-sm-4 px-md-4 px-lg-4">انتظرونا !</p>
                            <a href="../404_page/404_page.html">
                                <button style={{ fontSize: "1.1rem" }} className="bn632-hover bn26">انتقل</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Categ;