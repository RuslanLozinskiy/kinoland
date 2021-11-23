import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./BigSliders.module.css";
import Progressbar from "../ProgressBar/ProgressBar";
import { useHistory } from "react-router-dom";

function BigSliders(props) {
  const { data, image } = props;
  const history = useHistory();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    className: style.bigSliderItems,
    // nextArrow: style.next,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={style.boxSlider}>
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={style.bigSliderItems}
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
              <div className={style.bigImg}>
                <img
                  alt=""
                  src={
                    image.base_url +
                    image.backdrop_sizes[2] +
                    item.backdrop_path
                  }
                />
              </div>
              <div className={style.bigSliderInfo}>
                <div className={style.smallImg}>
                  <img
                    alt=""
                    src={
                      image.base_url + image.poster_sizes[3] + item.poster_path
                    }
                  />
                </div>
                <div className={style.bigSliderOverview}>
                  <span>
                    {item.hasOwnProperty("title") ? item.title : item.name}
                    <Progressbar vote_average={item.vote_average} />
                  </span>
                  <p>{item.overview}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
export default BigSliders;
