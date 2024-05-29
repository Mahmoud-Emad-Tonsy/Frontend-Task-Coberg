
import React from "react";
import Slider from "react-slick";
import blogsCard_1 from "../assets/images/blogs-card-1.png";
import blogsCard_2 from "../assets/images/blogs-card-2.png";
import blogsCard_3 from "../assets/images/blogs-card-3.png";
import blogsCard_4 from "../assets/images/blogs-card-4.png";
import blogsCard_5 from "../assets/images/card-5.jpg";
import CustomArrow from "../shared/CustomArrow";
import '../assets/sass/shared/_button.scss'
const Blog = () => {
  const cardDataBlogs = [
    {
      title: "Modern Interior",
      image: blogsCard_1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Exterior Project",
      image: blogsCard_2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Grey Beauty",
      image: blogsCard_3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Plantation interior",
      image: blogsCard_4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Role of furnitures",
      image: blogsCard_5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <CustomArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="blog-container">
      <h2>Blogs</h2>
      <Slider {...settings} className="card-slider">
        {cardDataBlogs.map((card, index) => (
          <div key={index} className="cards col-xl-3 col-lg-6">
            <div className="cardImg-container ">
              <img src={card.image} alt={card.title} />
            </div>
            <h3 className="text-card">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </Slider>

      <div className="container-btn  btn-blog">
        <button>View all</button>
      </div>
    </div>
  );
};

export default Blog;
