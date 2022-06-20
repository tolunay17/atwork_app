import styles from "./EatDrink.module.scss"
import list2 from "./assets/list2.png";
import green from "./assets/leaf2.png"
import atworkmap from "./assets/atwork-map.png"
// import list from "./assets/list2.png"


const Green = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.all_map}>
                <div className={styles.eatdrinkmap}>
                    <img src={green} alt="transport"/>
                    <p className={styles.text}>
                    Green
                    </p>
                    <button className={styles.hamburger} type="submit">
                    <img src={list2} alt="hamburger"/>
                    </button>
                </div>
            </div>
          <div className={styles.all_atworkmap}>
            <img className={styles.atworkmap} src={atworkmap} alt="map"/>
          </div>
        </div>
        </>
      );
}
export default Green;