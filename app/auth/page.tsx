"use client";
import { FormEvent, useEffect, useState } from 'react';

//import useAuth from '../../utils/hooks/useAuth.tsx.txtextras';
import { useAuthStore } from '../../store/zustand/auth.store';
//main firebase app from.js file
import { app } from '../../utils/firebase';
//firebase/auth default functions
import { getAuth, signOut} from 'firebase/auth';
//react-firebase-hooks specials
import { useAuthState,useIdToken,useCreateUserWithEmailAndPassword,useSignInWithEmailAndPassword,useSignInWithFacebook } from 'react-firebase-hooks/auth';



const fireAuth = getAuth(app);
import {useRouter} from 'next/navigation';
const Auth = () => {
	//let fireAuth:any={}
	//import {useRouter} from 'next/navigation';
	const route=useRouter();
	const [auth, setAuth] = useState<'signup' | 'signin'>('signin');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [invalid, setInvalid] = useState<boolean>(false);
    

	//const { isLoading, user, error } = useAuthStore();
	const [ userCred, isLoading, errorMessage ] = useAuthState(fireAuth);
	useEffect(()=>{
		if(userCred!=null){
			route.push('/home');
		}
	},[
		userCred
	])
	const toggleAuth = (state: 'signup' | 'signin') => {
		setAuth(state);
	};
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!password.length || !email.length) {
			setInvalid(true);
		}
		setInvalid(false);
		if (auth === 'signup' && !invalid) 
			{
				
				//signUp({email,password})
			}
			
		else if(auth=='signin' && !invalid){//email and password detected as one prop, because of my {}:any
		//	signIn({email,password})
		}
	};
	return (
		<main className='container form-signin text-center mt-4'>
			<form className='m-auto w-50' onSubmit={onSubmit}>
				<img className='mb-4' src='https://media.graphassets.com/BldVa3tyRDy2QkoyQq9R' alt='' width='72' height='57' />
				<h1 className='h3 mb-3 fw-normal text-start'>{auth == 'signup' ? 'Sign up' : 'Sign in'}</h1>
				{errorMessage && <div className='alert alert-danger'>{errorMessage?.message}</div>}
				<div className='form-floating'>
					<input
						type='email'
						onChange={e => setEmail(e.target.value)}
						value={email}
						className={`form-control ${invalid && 'is-invalid'} text-black`}
						id='floatingInput'
						placeholder='name@example.com'
					/>
					<label htmlFor='floatingInput'>Email address</label>
				</div>

				<div className='form-floating mt-2'>
					<input
						type='password'
						onChange={e => setPassword(e.target.value)}
						value={password}
						className={`form-control ${invalid && 'is-invalid'} text-black`}
						id='floatingPassword'
						placeholder='Password'
					/>
					<label htmlFor='floatingPassword'>Password</label>
				</div>

				<button className='w-100 btn btn-lg mt-2 btn-primary' disabled={isLoading} type='submit'>
					{isLoading ? 'Loading...' : auth === 'signup' ? 'Sign Up' : 'Sign In'}
				</button>

				<p className='mt-2 fw-bold'>
					{auth === 'signup' ? 'Already have account' : 'Not account yet'}{' '}
					{auth == 'signup' ? (
						<span className='fw-normal text-primary pointer' onClick={() => toggleAuth('signin')} style={{ cursor: 'pointer' }}>
							Sign in
						</span>
					) : (
						<span className='fw-normal text-primary pointer' onClick={() => toggleAuth('signup')} style={{ cursor: 'pointer' }}>
							Sign up now
						</span>
					)}
				</p>
			</form>
		</main>
	);
};

export default Auth;