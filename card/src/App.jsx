import Button from "./components/Button";
import Card from "./components/Card/";
import swPosterImg from "./assets/poster.jpg";
import esbPosterImg from "./assets/esb.jpg";
import jediPosterImg from "./assets/jedi.jpg";

export default function App() {
  return (
    <>
      <Card title="Poster: Star Wars(1977)" posterImg={swPosterImg} />
      <Card title="Poster: Empire Strikes Back (1980)" posterImg={esbPosterImg}/>
      <Card title="Poster: Return of the Jedi (1983)"  posterImg={jediPosterImg}/>
    </>
  );
}
