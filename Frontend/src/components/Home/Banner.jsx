import banner from "../../../public/banner.jpg";
const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 font-poppins flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-28">
          <div className="space-y-12 ">
            <h1 className="text-3xl md:text-4xl font-bold">
              Welcome to <span className="text-[#0789f3f7]">SHELFARI</span>
              <h1 className="text-3xl md:text-4xl font-bold mt-2 ">
                Discover the joy of reading with our curated{" "}
                <span className="text-[#0789f3f7] ">collection of books.</span>
              </h1>
            </h1>
            <p className="text-xl leading-8 ">
              Immerse yourself in the world of knowledge and imagination with
              our diverse selection of books. From educational resources to
              literary masterpieces, expand your mind and feed your curiosity.
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="bg-[#0789f3f7] text-white mt-6 btn hover:bg-black duration-300 border-none dark:hover:bg-white dark:hover:text-black">
            Submit
          </button>
        </div>
        <div className="order-1 w-full md:w-1/2 mt-2 md:mt-12 ml-2">
          <img alt="bannerImg" src={banner} className="rounded"></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
