import React from 'react';
import './Register.css'; // Ensure this is correctly importing your CSS file

export default function Register() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row justify-content-center">
                <div className="register text-center p-5 bg-light shadow rounded" style={{ maxWidth: '500px', width: '100%' }}>
                    <h1 className="mb-4">Create Account</h1>
                    <p className="text-muted mb-4">
                        From your profile, you will find all information <br />
                        connected to your account. And it's free to join!
                    </p>

                    <form>
                        <div className="form-group mb-3 position-relative">
                            <label htmlFor="fullName" className="sr-only">Full name</label>
                            <i className="fas fa-user position-absolute" style={{ left: '10px', top: '12px', color: '#aaa' }}></i>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="form-control pl-5 px-5"
                                placeholder="Full name"
                                aria-label="Full name"
                                required
                            />
                        </div>

                        <div className="form-group mb-3 position-relative">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <i className="fas fa-envelope position-absolute" style={{ left: '10px', top: '12px', color: '#aaa' }}></i>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control pl-5 px-5"
                                placeholder="Email"
                                aria-label="Email"
                                required
                            />
                        </div>

                        <div className="form-group mb-3 position-relative">
                            <label htmlFor="phone" className="sr-only">Phone number</label>
                            <i className="fas fa-phone position-absolute" style={{ left: '10px', top: '12px', color: '#aaa' }}></i>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="form-control pl-5 px-5"
                                placeholder="Phone number"
                                aria-label="Phone number"
                                required
                            />
                        </div>

                        <div className="form-group mb-4 position-relative">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <i className="fas fa-lock position-absolute" style={{ left: '10px', top: '12px', color: '#aaa' }}></i>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control pl-5 px-5"
                                placeholder="Password"
                                aria-label="Password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block w-100 fs-5">
                            Create Account
                        </button>
                    </form>

                    <div className="social-login my-2">
                        <p className="text-muted mb-3">Or</p>

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-outline-dark mr-2 d-flex align-items-center justify-content-center">
                                <i className="fa-brands fa-google mr-2 fs-4"></i> Continue with Google
                            </button>

                            <button className="mx-3 btn btn-outline-primary  d-flex align-items-center justify-content-center ">
                                <i className="fa-brands fa-facebook mr-2 fs-4"></i> Continue with Facebook
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
