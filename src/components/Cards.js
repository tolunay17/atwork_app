import styles from "./Cards.module.scss"
import fruit from "./assets/fruit.jpeg";
import mensen from "./assets/mensen.jpeg";
import friet from "./assets/friet.jpeg";
import kleren from "./assets/kleren.jpeg";

const Cards = () => {
    return (
      <>
      <div className={styles.container_cards}>
        <div className={styles.wrapper}>

          <div className={styles.all_btn}>
            <button className={styles.topbtn}>Rewards</button>
            <button className={styles.topbtn}>Step</button>
            <button className={styles.topbtn}>Discounts</button>
          </div>
          <div className={styles.cards}>
            <div className={styles.card_lush}>
                <div className={styles.btnlush} type="submit">
                  <p className={styles.text}>Lush<span> 20%</span></p>
                  
                  <img src={fruit} alt="fruit"/>
                </div>
            </div>
            <div className={styles.card_cafe}>
                <div className={styles.btnlush} type="submit">
                  <p className={styles.text}> Vooruit
                  Cafe<span> 10%</span></p>
                  
                  <img src={mensen} alt="mensen"/>
                </div>
            </div>
            <div className={styles.card_friet}>
                <div className={styles.btnlush} type="submit">
                  <p className={styles.text}>Des
                  Frietketel<span> 50%</span></p>
                  
                  
                  <img src={friet} alt="friet"/>
                </div>
            </div>
            <div className={styles.card_yak}>
                <div className={styles.btnlush} type="submit">
                  <p className={styles.text}>Yak en Yeti<span> 20%</span></p>
                  
                  
                  <img src={kleren} alt="kleren"/>
                </div>
            </div>
          </div>
        </div>

        </div>
      </>
    );
  };
  
  export default Cards;
  