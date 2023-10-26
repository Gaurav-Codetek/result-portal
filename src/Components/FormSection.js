import React from 'react'
import uietLogo from './Image/uiet-logo.png'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdContacts } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'


function FormSection(props) {
    return (
        <>
            <div className="bg">
                <div className="container contStyle">
                    <div className="form">
                        <img className='logo' src={uietLogo} alt="UIET Logo" />
                        <p className='clgNm'>{props.collegeName}</p>
                        <p className='siteNm'>{props.siteName}</p>

                        <form action="">
                            <div className="userId">
                                <FaUserAlt className='userBadge' color='#0a7fd5' size="22" />
                                <input type="text" name="userId" id="userId" placeholder='User ID' />
                            </div>
                            <br />
                            <div className="userId">
                                <RiLockPasswordFill className='userBadge' color='#0a7fd5' size="22" />
                                <input type="Password" name="userId" id="userId" placeholder='Password' />
                            </div>
                            <br />
                            <div className="userId">
                                <MdContacts className='userBadge' color='#0a7fd5' size="22" />
                                <select name="" id="userId">
                                    <option className='options' value="" >Student</option>
                                    <option className='options' value="" >Faculty</option>
                                    <option className='options' value="" >Admin</option>
                                    <option className='options' value="" selected>Select Role</option>
                                </select>
                            </div>
                            <br />
                            <div className="submit">
                                <input type="submit" value="Sign In" />
                            </div>
                            {/* <br /> */}
                            <div className="forgotPass">
                                <p>Forgot Password ?</p>
                            </div>
                        </form>

                    </div>
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
                            <BsArrowRight className='prevArrow'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormSection