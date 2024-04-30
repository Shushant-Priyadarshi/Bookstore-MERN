import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out Successfull!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("ERROR:" + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <>
      <button
        className="bg-[#0789f3f7] text-white  btn hover:bg-black duration-300 border-none dark:hover:bg-white dark:hover:text-black"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}

export default Logout;
