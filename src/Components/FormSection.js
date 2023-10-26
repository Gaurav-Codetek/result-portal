import React from 'react'
import Login from './LoginForm'
import Notice from './NoticeSection'

function FormSection() {
    return (
        <>
            <div className="bg">
                <div className="container contStyle">
                    <Login collegeName ="UIET PANJAB UNIVERSITY" siteName="RESULT PORTAL"/>
                    <Notice/>
                </div>
            </div>
        </>
    );
}

export default FormSection