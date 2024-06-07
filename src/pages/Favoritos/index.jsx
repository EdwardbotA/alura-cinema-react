import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import { useFavoritosContext } from "../../context/Favoritos";
import styles from "./Favoritos.module.css";

const Favoritos = () => {
  const { favorito } = useFavoritosContext();

  return (
    <>
      <Banner img="favoritos" color="#00BF63" />
      <Titulo>
        <h1>Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
};

export default Favoritos;
