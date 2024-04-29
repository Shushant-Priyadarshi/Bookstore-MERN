
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import list from "../../../public/list.json"
import Cards from "../Home/Cards";

function Course() {
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl container mx-auto md:px-20">
        <div className="mt-16  items-center justify-center text-center ">
          <h1 className="mt-10 text-2xl md:text-4xl">
            We are honored to have <br></br> you as our{" "}
            <span className="text-[#0789f3f7]"> guest🙏</span>
          </h1>
          <p className="mt-10">
            Browse through our extensive library featuring thousands of books,
            including bestsellers, classics, fiction, non-fiction, and more.
            From gripping thrillers to heartwarming romances, there is a book
            waiting for you.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Course;
