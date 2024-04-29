

function Cards({item}) {
  return (
    <>
      <div className=" mb-3 p-4">
        <div className="card w-full md:w-96 bg-base-100 shadow-xl  hover:scale-105 duration-300 dark:border">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
              className="w-64 md:w-full h-64 md:h-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge bg-[#0789f3f7] text-white">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline px-2 py-1">${item.price}</div>
              <div className="badge  cursor-pointer hover:bg-[#0789f3f7] hover:text-white px-2 py-1 duration-300">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
