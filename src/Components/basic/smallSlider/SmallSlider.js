import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./SmallSlider.module.css";
import LazyLoad from "react-lazyload";
import imgNotFound from "../../../assets/image-not-found.svg";

import { useHistory } from "react-router-dom";
function SmallSlider(props) {
  const { data, image } = props;
  const history = useHistory();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: style.smallSliderItems,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={style.smallSliderBox}>
      <Slider {...settings} className={style.slider}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={style.smallSliderItems}
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 300);

                if (item.hasOwnProperty("original_name")) {
                  history.push(`/kinoland/serial/${item.id}/details`);
                } else {
                  history.push(`/kinoland/movies/${item.id}/details`);
                }
              }}
            >
              <LazyLoad className={style.moviesImage} height={200}>
                {item.poster_path !== null ? (
                  <img
                  className={style.imgPoster}
                    src={
                      image.base_url + image.poster_sizes[3] + item.poster_path
                    }
                    title={
                      item.hasOwnProperty("original_title")
                        ? item.title
                        : item.name
                    }
                    alt=""
                  />
                ) : (
                  <img
                    src={imgNotFound}
                    alt=""
                    className={style.imageNotFound}
                  />
                )}
              </LazyLoad>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
export default SmallSlider;
