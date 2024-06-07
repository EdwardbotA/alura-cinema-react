import styles from "./Player.module.css";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import { useEffect, useState } from "react";

const Player = () => {
  const [video, setVideo] = useState([]);
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/DaniRiverol/alura-cinema-api/videos?id=${parametros.id}`
    )
      .then((res) => res.json())
      .then((data) => setVideo(...data));
  }, []);

  if (!video) return <NotFound />;

  return (
    <>
      <Banner img="player" color="#58b9ae" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;
