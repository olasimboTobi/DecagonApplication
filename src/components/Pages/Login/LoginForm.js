import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../../api/axios';

const LOGIN_URL = '/auth/login';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string().trim().required('Username cannot be empty'),
  password: Yup.string()
    .required('Password cannot be empty')
    .max(20, 'Password must not exceed 20 characters')
    .matches(
      // /[a-zA-Z0-9]+/,
      /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,

      'Invalid password format'
    ),
});

const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(LOGIN_URL, values, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(JSON.stringify(response?.data.token));
      console.log(JSON.stringify(response));
      const token = response?.data?.token;
      const data = response?.data;
      setAuth(token);
      navigate("/myaccount");
      
    } catch (err) {
      if (!err?.response) {
        toast.error('No server response');
      } else if (err.response?.status === 400) {
        toast.error('Missing username or password');
      } else if (err.response?.status === 401) {
        toast.error('Unauthorized');
      } else {
        toast.error('Login failed');
      }
    }
  };

  return (
    <section className='w-full'>
      <div className='xsm:w-[92%] xsm:mx-auto xsm:my-6 xsm:py-0 md:py-8 md:w-[60%] md:mx-auto md:my-6 lg:py-16 lg:w-[60%] lg:mx-auto lg:my-6 xl:py-0 xl:w-[60%] xl:mx-auto xl:my-6'>
        <div className='text-center'>
          <h1 className='font-bold text-[1.2rem] text-[#101828] leading-8 text-nowrap md:text-[1.5rem]'>
            Login to your Dashboard
          </h1>
        </div>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ errors, touched }) => (
            <Form>
              {/* Username Field */}
              <div className='mt-4 sm:0'>
                <div className='w-[100%] mt-2 mb-4'>
                  <label>Username</label>
                  <Field
                    name='username'
                    type='username'
                    placeholder='Type your username here'
                    className={`${
                      errors.username && touched.username ? 'border-warning' : ''
                    } border-gray-600 w-[100%] pl-2 py-2 border-[1px] shadow-lg outline-0 rounded-md borderfocus:outline-none focus:border-red-700 focus:ring-1 focus:ring-border-red-700 border-border-red-700 placeholder:font-extralight`}
                  />
                </div>
                {errors.username && touched.username && (
                  <div className='xsm:w-[70%] flex items-start justify-start gap-2  text-sm mb-4 text-red-900 xl:w-[50%]'>
                    <ErrorMessage name='username' />
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className='mt-4 sm:0'>
                <div className='w-[100%] mt-2 mb-4'>
                  <label>Password</label>
                  <Field
                    name='password'
                    type='password'
                    placeholder='Type your password here'
                    className={`${
                      errors.password && touched.password ? 'border-warning' : ''
                    } border-gray-600 w-[100%] pl-2 py-2 border-[1px] shadow-lg outline-0 rounded-md borderfocus:outline-none focus:border-red-700 focus:ring-1 focus:ring-border-red-700 border-border-red-700 placeholder:font-extralight `}
                  />
                </div>
                {errors.password && touched.password && (
                  <div className='xsm:w-[70%] flex items-start justify-start gap-2  text-sm mb-4 text-red-900 xl:w-[50%]'>
                    <ErrorMessage name='password' />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type='submit'
                  className='border-gray-600 w-[100%] pl-2 py-2 border-[1px] shadow-lg outline-0 rounded-md borderfocus:outline-none focus:border-red-700 focus:ring-1 focus:ring-border-red-700 border-border-red-700 placeholder:font-extralight bg-[#34A853] text-[#FFFFFF]'
                >
                  Get Started
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default LoginForm;
