import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useNavigate } from 'react-router';
import { Button, Card, Link } from '@material-ui/core';
//type SomeComponentProps = RouteComponentProps;
const Login = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigation = useNavigate();
	const login = (data: any) => {
		let params = {
			username: data.userName,
			password: data.password,
		};
		axios
			.post('http://localhost:3000/auth/login', params)
			.then(function (response) {
				//   IF User ALREADY EXISTS
				if (response.data.success === false) {
					toast.error(response.data.error, {
						position: 'top-right',
						autoClose: 3000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
						progress: 0,
						toastId: 'my_toast',
					});
				} else {
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
					localStorage.setItem('user', params.username);
					localStorage.setItem('auth', response.data.token);
					setTimeout(() => {
						//history.push("/");
						navigation('/all');
					}, 3000);
				}
			})

			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Card style={{ height: '95%', width: '40%', margin: 'auto' }}>


			<div className='col-md-12'>
				<div className='card-body'>
					<h3 className='card-title text-center text-secondary mt-3'>
						Login Form
					</h3>
					<form autoComplete='on' onSubmit={handleSubmit(login)}>
						<div className='mb-3 mt-4'>
							<label className='form-label'>User Name</label>
							<input
								type='text'
								className='form-control shadow-none'
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
						<div className='mb-3'>
							<label className='form-label'>Password</label>
							<input
								type='password'
								className='form-control shadow-none'
								id='exampleFormControlInput2'
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
						<div className='text-center mt-4 '>

							<Button color='primary' variant='contained' className='Button' type='submit'	 >
								Submit
							</Button>
							<br></br>
							<p className='card-text pb-2'>
								Have an Account?{' '}
								<Link href='/register'>
									Sign Up
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
export default Login;
