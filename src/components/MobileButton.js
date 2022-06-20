import styles from "./MobileButton.module.scss"
import logo from "./assets/witlogo.png"
import mobhome from "./assets/home2.png"
import mobmap from "./assets/map2.png"
import mobtrop from "./assets/trophy2.png"
import moblist from "./assets/list2.png"
import mobprof from "./assets/profile.png"

const MobileButton = () => {
    return (
      <>
      <div className={styles.mobile_button}>
        <ul>
          <li>
            <button className={styles.btn}><img src={mobprof}></img></button>
          </li>
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
      </>
    );
  };
  
  export default MobileButton;