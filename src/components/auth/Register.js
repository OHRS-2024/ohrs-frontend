import '../../assets/main.css'

const Register = () => {

  return (
    <div className='login-form-container m-auto my-20 rounded-lg w-3/4 lg:w-1/2'>
    <h1 className='text-4xl block text-center bold'>Register</h1>
    <form className="form">

      <input className='block rounded-md border-box w-full border-solid border-teal-400 border focus:outline-teal-500 m-auto p-5 my-8' type="text" placeholder="First name" />
      <input className='block rounded-md border-box w-full border-solid border-teal-400 border focus:outline-teal-500 m-auto p-5 my-8' type="text" placeholder="Last name" />
      <input className='block rounded-md border-box w-full border-solid border-teal-400 border focus:outline-teal-500 m-auto p-5 my-8' type="email" placeholder="Email" />
      
      <div className='flex flex-row justify-around rounded-md border-box w-full border-solid border-teal-300 border focus:outline-teal-400 m-auto p-5 my-8'>
            Gender
            <div className='flex flex-row items-center'>
                <p>Male</p>
                <input type='radio' 
                name='gender'
                className='mx-3' />
            </div>
            <div className='flex flex-row items-center'>
                <p>Female</p>
                <input type='radio' 
                name='gender'
                className='mx-3' />
            </div>
      </div>


      <div className='flex flex-row justify-around rounded-md border-box w-full border-solid border-teal-300 border focus:outline-teal-400 m-auto p-5 my-8'>
            I'm a
            <div className='flex flex-row items-center'>
                <p>Tenant</p>
                <input type='radio'
                name='role' 
                className='mx-3'/>
            </div>
            <div className='flex flex-row items-center'>
                <p>Landlord</p>
                <input type='radio' 
                name='role' 
                className='mx-3'
                />
            </div>
      </div>

      <input className='block rounded-md border-box w-full border-solid border-teal-400 border focus:outline-teal-500 m-auto p-5 my-8' type="password" placeholder="Enter Password" />
      <input className='block rounded-md border-box w-full border-solid border-teal-400 border focus:outline-teal-500 m-auto p-5 my-8' type="password" placeholder="Reenter password" />

      <div className='flex flex-row flex-wrap justify-around gap-10'>
      <button className='block bg-teal-700 rounded-md text-teal-50 py-7 hover:bg-teal-600 ease-in-out transition-all flex-1' type="submit">
        Register
      </button>
      <button className='block bg-teal-700 rounded-md text-teal-50 py-7 hover:bg-teal-600 ease-in-out transition-all flex-1' type="submit">
        Reset
      </button>
      </div>
    </form>
    </div>
  );
};

export default Register;
