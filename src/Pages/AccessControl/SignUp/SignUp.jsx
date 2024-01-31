import React from 'react';
import logo from '../../../assets/logo.png';
import img from '../../../assets/signup-photo.png'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className='col-span-2 bg-[#2E0762] px-5'>
                    <div className='lg:mt-10'>
                        <img className='mb-12' src={logo} alt="" />
                        <div className='mb-7'>
                            <img src={img} alt="" />
                        </div>
                        <p className='text-center text-white'>A confirmation email is being sent to your email address. Our board intelligence experts will be in touch soon to discuss next steps.</p>
                    </div>
                </div>
                <div className='col-span-3 mt-20 mr-28 mb-20'>
                    {/* form section  */}
                    <form className=''>
                        <h4 className='text-2xl font-semibold leading-[54px]'>Sign Up</h4>
                        <hr className='mb-2 lg:mb-9 w-3/4 border border-[#2E0762]' />

                        {/* Full name  */}
                        <div className="mb-2 lg:mb-5">
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-[#2E0762] rounded-md focus:outline-none focus:border-blue-500" placeholder="Full name" required />
                        </div>

                        <div className='grid grid-cols-2 gap-x-8'>
                            {/* Work Email */}
                            <div className="mb-2 lg:mb-5">
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Work Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-[#2E0762] rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter email address" required />
                            </div>
                            {/* Official Phone */}
                            <div className="mb-2 lg:mb-5">
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Official Phone</label>
                                <input type="number" id="phone" name="phone" className="w-full px-3 py-2 border border-[#2E0762] rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter phone number" required />
                            </div>
                            {/* Company Name */}
                            <div className="mb-2 lg:mb-5">
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Company Name</label>
                                <input type="text" id="companyName" name="companyName" className="w-full px-3 py-2 border border-[#2E0762] rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter company name" required />
                            </div>
                            {/* Company Address */}
                            <div className="mb-2 lg:mb-5">
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Company Address</label>
                                <input type="text" id="address" name="address" className="w-full px-3 py-2 border border-[#2E0762] rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter address" required />
                            </div>
                            {/* Your Designation */}
                            <div className="mb-2 lg:mb-7">
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Designation</label>
                                <input type="text" id="designation" name="designation" className="w-full px-3 py-2 border border-[#2E0762] rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter designation" required />
                            </div>
                            {/* Password */}
                            <div className="mb-2 lg:mb-7">
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Password</label>
                                <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-[#2E0762] rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter password" required />
                            </div>
                        </div>

                        {/* sign in button  */}
                        <button type="submit" className="w-full bg-[#2E0762] text-white p-2 rounded-md mb-3 lg:mb-5">SIGN UP</button>

                        {/* Already Registered */}
                        <div className="text-center lg:text-start">
                            <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;