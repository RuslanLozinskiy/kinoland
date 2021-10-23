import Loader from "react-loader-spinner";

import style from "./LoaderSpinner.module.css";

export const LoaderSpinner = () => {
  return (
    <div className={style.currnetPageSpinnerBox}>
      <div className={style.currentPageSpinner}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    </div>
  );
};
