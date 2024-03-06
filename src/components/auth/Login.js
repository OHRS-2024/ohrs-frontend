import '../../assets/main.css'
import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [backendData, setBackendData] = useState({});
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
      axios.get("http://127.0.0.1:4000/auth/login")
          .then(res => {
              res.status === 200 ? setBackendData(res.data) : setBackendData(null);
          })
          .catch(err => {
              console.error(err.message);
              setBackendData(null)
          });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
      setLoginError('');
  };

  const handlePasswordChange = (e) => {
    setLoginError('');
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const [ email, password ] = e.target;
      setLoginInfo({
        "email" : email.value,
        "password" : password.value,
      });
  };

  useEffect(() => {
      if (loginInfo.email && loginInfo.password) {
          try {
              fetch('http://127.0.0.1:4000/auth/login', {
                  body: JSON.stringify({
                      'email': loginInfo.email,
                      'password': loginInfo.password,
                  }),
                  headers: { "Content-Type": 'application/json' },
                  method: 'POST'
              }).then(res => {
                  return res.json();
              }).then(data => {
                  if (data.result.success) {
                    setLoginError(data.result.message);
                    const cookie = data.result.cookie;
                    const cookieString = `${cookie.name}=${cookie.value}; Max-Age=${cookie.maxAge}; path=/`;
                    document.cookie = cookieString;
                    console.log(cookieString);
                  }else{
                    setLoginError(data.result.message);
                  }
              }).catch(err => console.error(err));
          } catch (error) {
              console.log(error);
          }
      }
  }, [loginInfo]);

  return (
      <>
          {!backendData ? <p>loading...</p> :
              <div className='login-form-container m-auto my-20 rounded-lg w-3/4 lg:w-1/2'>
                  <h1 className='text-3xl my-10 text-rose-500 block text-center font-bold'>NEWAY HOUSE PLATFORM</h1>
                  <h1 className='text-3xl block text-center bold'>Login</h1>
                  <p 
                  className='text-red-500'
                  >{loginError}</p>
                  <form onSubmit={handleSubmit}>
                      <input
                          className='block rounded-md border-box w-full border-solid border-teal-400 border focus:outline-teal-500 m-auto p-5 my-8'
                          type="email"
                          placeholder="Email"
                          name='email'
                          onChange={handleEmailChange}
                          required
                      />  
                        <input
                            className='block rounded-md border-box w-full border-solid border-teal-400 border focus:outline-teal-500 m-auto p-5 my-8' 
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            name='password'
                            onChange={handlePasswordChange}
                            required
                        />
                          <div>
                          <input 
                              type="checkbox"
                              className='m-4 inline-block'
                              onChange={togglePasswordVisibility}
                              defaultChecked={showPassword}
                            />
                            <span className='inline-block touch-none'> show password</span>
                          </div>
                          <br/>
                      <div className='flex flex-row flex-wrap justify-around gap-5 py-8'>
                          <button className='block bg-teal-700 rounded-md text-teal-50 py-7 hover:bg-teal-500 ease-in-out transition-all flex-1' type="submit">
                              Login
                          </button>
                          <button className='block bg-teal-700 rounded-md text-teal-50 py-7 hover:bg-teal-500 ease-in-out transition-all flex-1' type="reset">
                              Reset
                          </button>
                      </div>
                      <div className='block my-10'>
                          <a href='/'>Forgot password</a>
                      </div>
                  </form>
              </div>

          }
      </>
  );
};
export default Login;