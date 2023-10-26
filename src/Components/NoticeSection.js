import React from 'react'
import { BsArrowRight } from 'react-icons/bs'


function NoticeSection(){
    return(
        <>
        <div className="notice">
                        <h2>Notices & updates</h2>
                        <br />
                        <hr />
                        <br />
                        <br />
                        <div className="updates">
                            <div className="updInfo">
                                <div className="date">
                                    23 <div className="month">July</div>
                                </div>
                                <div className="info">
                                    <p className="head">Result Update!</p>
                                    <p className="des">2nd year results uploaded.</p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="updInfo">
                                <div className="date">
                                    29 <div className="month">Jan</div>
                                </div>
                                <div className="info">
                                    <p className="head">Correction update!</p>
                                    <p className="des">Error has been solved.</p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="updInfo">
                                <div className="date">
                                    17 <div className="month">Aug</div>
                                </div>
                                <div className="info">
                                    <p className="head">Result Update!</p>
                                    <p className="des">Results of even semester is displayed.</p>
                                </div>
                            </div>
                        </div>

                        <div className="prev">
                            <p>Previous</p>
                            <BsArrowRight className='prevArrow' />
                        </div>
                    </div>
        </>
    );
}

export default NoticeSection