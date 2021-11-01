import { useEffect, useState } from "react";

import { useParams } from "react-router";
import { getConfiguration } from "../../../store/data/dataConfg";
import { getActor, getActorCredits } from "../../../store/data/dataOfActor";

import AboutActor from "../../CurrentPages/CurrentActor/aboutActor/AboutActor";
import BiographyActor from "../../CurrentPages/CurrentActor/biographyActor/BiographyActor";
import ImageActor from "../../CurrentPages/CurrentActor/imageActor.js/ImageActor";
import Item from "../../basic/movieCard/Item";

import style from "./ActorPage.module.css";

function ActorPage(props) {
  const [actor, setActor] = useState([]);
  const [confg, setConfg] = useState([]);
  const [actorCredits, setActorsCredits] = useState([]);
  const params = useParams();
  useEffect(() => {
    getActor(params).then((res) => setActor(res));
    getActorCredits(params).then((res) => setActorsCredits(res));
    getConfiguration().then((res) => setConfg(res));
  }, [params]);
  actorCredits.length = 20;
  return actor.length !== 0 &&
    confg.length !== 0 &&
    actorCredits.length !== 0 ? (
    <div className={style.actorPage}>
      <div className={style.infoActor}>
        <ImageActor confg={confg} data={actor} />
        <AboutActor data={actor} />
      </div>
      <BiographyActor data={actor} />
      <h2>участвовал(-a) в таких проектах: </h2>
      <div className={style.creditItems}>
        <Item item={actorCredits} image={confg} />
      </div>
    </div>
  ) : null;
}
export default ActorPage;
