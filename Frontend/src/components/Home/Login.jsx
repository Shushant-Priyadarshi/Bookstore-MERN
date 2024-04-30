import { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const modalRef = useRef(null);

  const handleCloseModal = (event) => {
    if (event.target === modalRef.current) {
      modalRef.current.close();
    }
  };

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:6969/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfull!");
          document.getElementById("my_modal_5").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          toast.error("Error: " + err.response.data.message);
          setTimeout(()=>{},2000);
        } else {
          console.log(err);
          toast.error("Error: Something went wrong. Please try again later.");
          setTimeout(()=>{},2000);
        }
      });
  };

  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle"
      ref={modalRef}
      onClick={handleCloseModal}
    >
      <div className="modal-box bg-stone-200 dark:bg-slate-600 p-6 rounded-lg w-full md:w-96">
        <h3 className="font-bold text-lg text-center mb-4">Login</h3>

        {/* EMAIL */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example001@gmail.com"
            {...register("email", { required: true })}
            className="border rounded-md outline-none w-full px-3 py-1 bg-white text-black"
          />
          {errors.email && (
            <span className="text-sm dark:text-red-500 text-red-600">
              This field is required
            </span>
          )}
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
            className="border rounded-md outline-none w-full px-3 py-1 bg-white text-black"
          />
          {errors.password && (
            <span className="text-sm  dark:text-red-500 text-red-600">
              This field is required
            </span>
          )}
        </div>

        {/* BUTTONS */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black duration-300"
            >
              Submit
            </button>

            <Link to={"/signup"}>
              No Account!{" "}
              <span className="underline text-blue-500 cursor-pointer">
                Signup here
              </span>
            </Link>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
