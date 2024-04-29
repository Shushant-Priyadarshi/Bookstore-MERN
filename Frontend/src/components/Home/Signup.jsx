
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Add your login logic here
  };

  return (
    <div className='flex h-screen justify-center items-center bg-slate-800'>
      <div id="my_modal_5" className="bg-gray-900 text-white p-6 rounded-lg w-full md:w-96">
        <div className="model-box">
          <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
            <h3 className="font-bold text-lg text-center mb-4">Signup</h3>
        
            {/* NAME */}
            <div className="mb-4">
              <label className="block mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                type="text" 
                className="border rounded-md outline-none w-full px-3 py-1 bg-white text-black"
              />
               {errors.name && (
            <span className="text-sm dark:text-red-500 text-red-600">This field is required</span>
          )}
            </div>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                {...register("email", { required: true })}
                placeholder="example001@gmail.com"
                type="email"
                className="border rounded-md outline-none w-full px-3 py-1 bg-white text-black"
              />
               {errors.email && (
            <span className="text-sm dark:text-red-500 text-red-600">This field is required</span>
          )}
            </div>

            {/* PASSWORD */}
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                {...register("password", { required: true })}
                placeholder="Enter Password"
                type="password"
                className="border rounded-md outline-none w-full px-3 py-1 bg-white text-black"
              />
               {errors.password && (
            <span className="text-sm dark:text-red-500 text-red-600">This field is required</span>
          )}
            </div>

            {/* BUTTONS */}
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black duration-300">
                Signup
              </button>

              <Link to={"/"}>
                Have Account? <span className="underline text-blue-500 cursor-pointer">Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
