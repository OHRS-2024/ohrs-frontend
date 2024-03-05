import '../../assets/main.css'

const Login = () => {
  return (
    <div className='login-form-container m-auto my-20 rounded-lg w-3/4 lg:w-1/2'>
    <h1 className='text-3xl my-10 text-rose-500 block text-center font-bold'>NEWAY HOUSE PLATFORM</h1>
    <h1 className='text-3xl block text-center bold'>Login</h1>
    <form className="form">
      <input className='block rounded-md border-box w-full border-solid border-teal-400 border focus:outline-teal-500 m-auto p-5 my-8' type="email" placeholder="Email" />
      <input className='block rounded-md border-box w-full border-solid border-teal-400 border focus:outline-teal-500 m-auto p-5 my-8' type="password" placeholder="Password" />
      <div className='flex flex-row flex-wrap justify-around gap-5 '>
      <button className='block bg-teal-700 rounded-md text-teal-50 py-7 hover:bg-teal-500 ease-in-out transition-all flex-1' type="submit">
        Login
      </button>
      <button className='block bg-teal-700 rounded-md text-teal-50 py-7 hover:bg-teal-500 ease-in-out transition-all flex-1' type="submit">
        Reset
      </button>
      </div>
      <div className='block my-10'>
        <a href='/'>Forgot password</a>
      </div>
    </form>
    </div>
  );
};

export default Login;