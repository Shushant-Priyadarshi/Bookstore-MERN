import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20">
        <div className="mt-16 items-center flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl mt-10">
            Contact
            <span className="text-[#0789f3f7]"> Us</span>
          </h1>
          <div className="mt-10 border w-full md:w-96 rounded-md shadow-xl bg-stone-300 dark:text-black ">
            <form className=" p-4">
              <label htmlFor="name">Name</label>
              <br></br>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="border rounded-md outline-none w-full px-3 py-1 bg-white text-black mb-4"
              />

              <label htmlFor="email">Email</label>
              <br></br>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border rounded-md outline-none w-full px-3 py-1 bg-white text-black mb-4"
              />

              <label htmlFor="message">Message</label>
              <br></br>
              <textarea
                type="text"
                placeholder="Feedback?"
                rows="4"
                cols="50"
                className="border rounded-md outline-none w-full px-3 py-1 bg-white text-black mb-4"
              />
              <button className="bg-[#0789f3f7] text-white  btn hover:bg-black duration-300 border-none dark:hover:bg-white dark:hover:text-black ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
