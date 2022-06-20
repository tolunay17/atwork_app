import styles from "./Ohne.module.scss"
import ohne from "./assets/choco.jpeg"
import close from "./assets/close.svg"
const Ohne = () => {
    return (
      <>
        <div className={styles.container_greenguidelabel}>
            <img className={styles.closebtn} src={close}/>
                <div className={styles.wrapper}>
                    <div className={styles.container_text}> 
                        <img className={styles.image} src={ohne}/>
                        <h2 className={styles.subtitle}>Ohne</h2>
                        <p className={styles.uppercase}>WINKEL, VERPAKKINGSVRIJ, GREEN</p>
                        <span>Steendam 68, 9000 Gent</span>
                        <p className={styles.text}>
                        Bij OHNE winkel je verpakkingsvrij,
                        biologisch en lokaal. Ga voor zero waste en
                        maak een verschil voor onze planeet met
                        onverpakte en herbruikbare, biologisch
                        afbreekbare producten
                        </p>

                        <p className={styles.text2}>
                        Met onze online winkel willen we nog meer
                        drempels verlagen om gemakkelijk afval te
                        vermijden in je huishouden. Jij bestelt en wij
                        bereiden je afvalvrije boodschappen om te
                        leveren in groot Gent op woensdag, vrijdag
                        of zaterdag. Afvalvrij door te werken met
                        wasbare verpakkingen die wij terugnemen
                        voor volgende bestellingen
                        </p>
                        <p className={styles.text3}>
                        Er is ook nog een alternatieve locatie op de
                        Koningin Elizabethlaan 22 in Gent.                </p>
                        <ul className={styles.text3}>
                            Openingsuren
                        <li>Ma - do: 10u - 19u</li>
                        <li>Vrij - zat: 10u - 18u</li>
                        <li>Zon- en feestdagen: gesloten</li>
                        </ul>
                    </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Ohne;