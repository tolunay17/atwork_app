import styles from "./MobileVer.module.scss"
import mobhome from "./assets/home2.png"
import mobmap from "./assets/map2.png"
import mobtrop from "./assets/trophy2.png"
import moblist from "./assets/list2.png"
import mobprof from "./assets/profile.png"
import close from "./assets/close.svg"
const MobileVer = () => {
    return (
      <>
      <div className={styles.mobile_button}>
        <img className={styles.closebtn} src={close}/>
        <div className={styles.wrapper}>
            <ul>
            <li>
            <button className={styles.btn}><img src={mobhome} /></button>
            </li>

            <li>
            <button className={styles.btn}><img src={mobtrop} /></button>
            </li>

            <li>
            <button className={styles.btn}><img src={mobmap} /></button>
            </li>

            <li>
            <button className={styles.btn}><img src={moblist} /></button>
            </li>
            </ul>
        </div>
      </div>
      </>
    );
  };
  
  export default MobileVer;