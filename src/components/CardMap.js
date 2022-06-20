import styles from "./CardMap.module.scss"
import list2 from "./assets/list2.png";
import atworkmap from "./assets/atwork-map.png"
import mobmap from "./assets/map2.png"
// import list from "./assets/list2.png"

const CardMap = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.all_map}>
            <div className={styles.eatdrinkmap}>
              <img src={mobmap} alt="map"/>
              <p className={styles.text}>
              Kaart
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
export default CardMap