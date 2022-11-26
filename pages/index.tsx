import {Tag, P , Htag , Button, Rating} from "../components";
import styles from '../styles/Home.module.css';
import React from "react";
import {withLayout} from "../layout/Layout";

function Home() {
  const [rating , setRating] = React.useState<number>(4);

  return (
    <div className={styles.containerHome}>

      <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>

    </div>
  );
}

export default withLayout(Home);