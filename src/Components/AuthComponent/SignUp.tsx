import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Button, Card, Link } from '@material-ui/core';

//type SomeComponentProps = RouteComponentProps;
const SignUp: FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();
	const navigation = useNavigate();
	const submitData = (data: any) => {
		let params = {
			username: data.userName,
			//	email: data.email,
			password: data.password,
			//	confirmpassword: data.cpassword,
		};
		console.log(data);
		axios
			.post('http://localhost:3000/auth/register', params)
			.then(function (response) {
				toast.success(response.data.message, {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: 0,
					toastId: 'my_toast',
				});
				reset();
				setTimeout(() => {
					//history.push("/login");
					navigation('/login');
				}, 3000);
			})

			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<Card style={{ height: '95%', width: '40%', margin: 'auto' }}>
			<div className='col-md-12'>
				<div className='card-body'>
					<h3 className='card-title text-center text-secondary mt-3 mb-3'>
						Sign Up Form
					</h3>
					<form
						className='row'
						autoComplete='on'
						onSubmit={handleSubmit(submitData)}>
						<div className=''>
							<div className=''>
								<label className='form-label'>User Name</label>
								<input
									type='text'
									className='form-control form-control-sm'
									id='exampleFormControlInput1'
									{...register('userName', {
										required: 'User Name is required!',
									})}
								/>
								{errors.userName && (
									<p className='text-danger' style={{ fontSize: 14 }}>
										{errors.userName.message}
									</p>
								)}
							</div>
						</div>

						<div className=''>
							<label className='form-label'>Password</label>
							<input
								type='password'
								className='form-control form-control-sm'
								id='exampleFormControlInput5'
								{...register('password', {
									required: 'Password is required!',
								})}
							/>
							{errors.password && (
								<p className='text-danger' style={{ fontSize: 14 }}>
									{errors.password.message}
								</p>
							)}
						</div>
						<div>
							<label className='form-label'>Confirm Password</label>
							<input
								type='password'
								className='form-control form-control-sm'
								id='exampleFormControlInput6'
								{...register('cpassword', {
									required: 'Confirm Password is required',

									validate: (value) =>
										value === watch('password') ||
										"Passwords don't match.",
								})}
							/>
							{errors.cpassword && (
								<p className='text-danger' style={{ fontSize: 14 }}>
									{errors.cpassword.message}
								</p>
							)}
						</div>
						<div className='text-center mt-4 '>
							<Button
								color='primary' variant='contained' className='Button' type='submit'>
								Submit
							</Button>
							<p className='card-text'>
								Already have an account?{' '}
								<Link href='/login'>
									Log In
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>

			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover
				limit={1}
				transition={Flip}
			/>
		</Card>
	);
};

export default SignUp;
