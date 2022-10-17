import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app)

const LoginBootstraps = () => {
    const [success, setSuccess] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true)
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email)
        console.log(email);
    }

    const handleForgetPassword = () => {
        // if (!userEmail) {
        //     alert('Please Reset email sent.Please check your emails')
        //     return;
        // }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password Reset email sent,please check your email')
            })
            .catch(error => {
                console.error('error', error);
            })
    }


    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Log in</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Enter your email</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="formGroupExampleInput" placeholder="Your email" name='email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Enter your Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Your password" name='password' required />
                </div>
                {success && <p>Successfully log in to the account</p>}
                <button className="btn btn-primary" type="submit">Log in</button>
                <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
                <p>Forget password? <button type='button' onClick={handleForgetPassword} className='btn btn-link'>Reset password</button></p>
            </form>
        </div>
    );
};

export default LoginBootstraps;