import {useState,useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios"

function FreeBooks() {
  const [book,setBook] =useState([]);
  useEffect(()=>{
      const getBook =async()=>{
        try{
          const res =await axios.get("http://localhost:6969/book");
          const data =res.data.filter((data) => data.category === "free");
          console.log(data)
          setBook(data)
        }catch(e){
          console.log("error:",e);
        }
      }
      getBook();
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-semibold text-xl pb-2">Free Offered <span className="text-[#0789f3f7]">Books</span></h1>
      <p>
        Browse through our extensive library featuring thousands of books,
        including bestsellers, classics, fiction, non-fiction, and more. From
        gripping thrillers to heartwarming romances, there is a book waiting for
        you.
      </p>
    </div>

    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-7">
    <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </>
  );
}

export default FreeBooks;
