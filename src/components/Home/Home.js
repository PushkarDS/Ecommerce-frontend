import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product";
// import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Footer from "../layout/Footer/Footer";
import { Carousel } from "react-responsive-carousel";
import carouselImg from "../../images/carouselimg.jpeg";
import carouselImg1 from "../../images/carouselimg1.jpeg";
import carouselImg2 from "../../images/carouselimg2.jpeg";
import carouselImg3 from "../../images/carouselimg3.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, useNavigate } from "react-router-dom";

//
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  const { loading, products, error } = useSelector((state) => state.products);

  // console.log(products)
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    } 
    dispatch(getProducts());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <MetaData title="Home" />

          <header id="home">
            <div className="heading">
              <div className="head-content ">
                <h1 className="font-h"> SHOP NOW</h1>
                <p className="font-h">
                  <strong> Find Best Deals of Today </strong>
                </p>
                <div>
                  <a href="#container" className="head-link" id="">
                    <strong> Start Shopping Now! </strong>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <section className="carousel-section">
          <div className="carouselContainer">
            <Carousel infiniteLoop autoPlay>
              <Link className="carouselimgLink"to="/products">
                <img
                  onClick={handleClick}
                  src={carouselImg1}
                  className="c-insidediv-img"
                  alt="."
                />
              </Link>
              <Link className="carouselimgLink"to="/products">
                <img
                  onClick={handleClick}
                  src={carouselImg2}
                  className="c-insidediv-img"
                  alt="."
                />
              </Link>
              <Link className="carouselimgLink"to="/products">
                <img
                  onClick={handleClick}
                  src={carouselImg3}
                  className="c-insidediv-img"
                  alt="."
                />
              </Link>
              <Link className="carouselimgLink"to="/products">
                <img
                  onClick={handleClick}
                  src={carouselImg}
                  className="c-insidediv-img"
                  alt="."
                />
              </Link>
              

              <Link className="carouselimgLink"to="/">
                <img
                  src="https://www.kent.co.in/blog/wp-content/uploads/2016/11/Maintenance-of-ro-water-purifier.jpg"
                  className="c-insidediv-img"
                  alt="."
                />
              </Link>
            </Carousel>
          </div>
          </section>

          <div className="product-section">
            <h2 id="container" className="homeHeading">
              Featured Products
            </h2>
            <div className="container reaveal">
              {products && products.map((p,index) => <Product key={index} p={p} />)}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
