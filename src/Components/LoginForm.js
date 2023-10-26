import React from 'react'
import uietLogo from './Image/uiet-logo.png'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdContacts } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'

function LoginForm(props){
    return (

        <>
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
                            <br />
                            <div className="forgotPass">
                                <p>Forgot Password ?</p>
                            </div>
                        </form>
                    </div>
        </>
    );
}

export default LoginForm