import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20">
        <div className="mt-16 items-center flex flex-col justify-center">
          <h1 className="text-xl md:text-4xl mt-10">
            About
            <span className="text-[#0789f3f7]"> Us</span>
          </h1>
        </div>

        <div>
          <h1 className="text-xl md:text-3xl text-center md:text-start mt-10">
            About Our MERN{" "}
            <span className="text-[#0789f3f7]">Bookstore Project</span>
          </h1>
          <p className="mt-5 text-center md:text-start text-lg md:text-xl ">
            {" "}
            Welcome to my MERN Bookstore project! I'm a passionate developer
            with a love for books and a desire to create engaging web
            experiences. This project is a reflection of my dedication to
            learning and exploring the exciting world of full-stack development.
          </p>

          <h1 className="text-xl md:text-3xl text-center md:text-start mt-10">
            My <span className="text-[#0789f3f7]">Misson</span>
          </h1>
          <p className="mt-5 text-center md:text-start text-lg md:text-xl ">
            {" "}
            At my MERN Bookstore, my mission is simple: to build a platform that
            makes it easy for book enthusiasts to discover, purchase, and enjoy
            their favorite titles. I believe that books have the power to change
            lives, and I'm committed to making quality literature accessible to
            everyone.
          </p>

          <h1 className="text-xl md:text-3xl text-center md:text-start mt-10">
            Project<span className="text-[#0789f3f7]"> Features</span>
          </h1>
          <p className="mt-5 text-center md:text-start text-lg md:text-xl ">
            {" "}
            <p><span className="font-semibold">User Authentication: </span>Create an account, log in securely, and access
            premium content.</p><br></br> <p><span className="font-semibold">Book Catalog: </span>Browse a curated collection of books,
            including free and paid titles.</p><br></br> <p><span className="font-semibold">Responsive Design:  </span> Enjoy a seamless browsing experience on
            any device, from desktop computers to smartphones and tablets.</p> 
          </p>

          <h1 className="text-xl md:text-3xl text-center md:text-start mt-10">
            Let's {" "}
            <span className="text-[#0789f3f7]">Connect</span>
          </h1>
          <p className="mt-5 text-center md:text-start text-lg md:text-xl ">
            {" "}
            Thank you for visiting my MERN Bookstore project! I'm excited to share my passion for books and technology with you. Whether you're a fellow developer, a book lover, or just curious to learn more, I invite you to explore the site and join me on this journey of creativity and innovation.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
