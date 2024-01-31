import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='bg-[#2E0762]'>
            <div className='container pb-5 lg:pb-40'>
                <div className='-ml-5 lg:-ml-20 2xl:-ml-0 lg:mt-10'><img src={logo} alt="" /></div>

                <div className='grid grid-cols-1 lg:grid-cols-7 items-center mt-12 text-white'>
                    {/* thank you section  */}
                    <div className='col-span-3'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold lg:leading-[50px]'>Thank' You!</h2>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold lg:leading-[50px] mb-2 lg:mb-5'>We'll Be In Touch Soon</h2>
                        <p className='mb-2 lg:mb-4'>A confirmation email is being sent to your email address. Our board intelligence experts will be in touch soon to discuss next steps.</p>

                        <p>In the meantime, you can learn more about our platform by watching the video on this page, and you can discover interesting resources below or continue browsing our site; there are resources for every industry and profession to be found.</p>
                    </div>
                    <div className='col-span-1 bg-[#D9D9D9] w-[1px] mx-auto h-64'></div>

                    {/* form section  */}
                    <form className='col-span-3'>
                        <h4 className='text-2xl font-semibold leading-[54px]'>Sign In</h4>
                        <hr className='w-full mb-2 lg:mb-9' />
                        {/* Email field  */}
                        <div className="mb-2 lg:mb-9">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="User Id or Email" required />
                        </div>

                        {/* Password field */}
                        <div className="mb-7 lg:mb-12">
                            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Password" required />
                        </div>

                        {/* sign in button  */}
                        <button type="submit" className="w-full bg-[#ED1B93] text-white hover:text-black p-2 rounded-md hover:bg-white mb-3 lg:mb-10">SIGN IN</button>

                        {/* Forgot Password */}
                        <div className="mb-2 lg:mb-8 text-center">
                            <Link to="#">Forgot Password?</Link>
                        </div>

                        {/* Already Registered */}
                        <div className="text-center lg:text-start">
                            <p>Don't have an account? <Link to="/sign-up">Register Now</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;