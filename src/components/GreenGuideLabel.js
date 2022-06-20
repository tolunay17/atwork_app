import styles from "./GreenGuideLabel.module.scss"

const GreenGuideLabel = () => {
    return (
      <>
        <div className={styles.container_greenguidelabel}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Green Guide Label</h1>
            <div className={styles.container_text}>
                <p className={styles.text}>
                Green Guide is uw eco gids door Gent!
                Doormiddel van het gebruiken van deze app
                kunt u uzelf navigeren door de groene stad en
                de meest duurzame en milieubewuwte plekken vinden
                </p>

                <p className={styles.text2}>
                ken vinden.
                Of u Gent al kent of juist nog niet, de guide is
                hier om u up-to-date te houden met alle
                nieuwe eco-spots in deze groene stad.
                </p>
                <p className={styles.text3}>
                Doormiddel van de Green Guide label! Wij, de
                Green Guide hebben een aantal vereisten dat
                een eco-spot moet hebben om in onze guide
                kunnen staan,
                </p>
                <ul className={styles.text3}>
                  <li>- Milieu bewust</li>
                  <li>- Zo min mogelijk afval</li>
                  <li>- Biologisch product</li>
                  <li>- Verminderen van bleesgebruik</li>
                  <li>- Seizoensgebonden</li>
                  <li>- Lokaal in Gent</li>
                  <li>- Energiezuinig</li>
                  <li>- Afval scheiden</li>
                  <li>- Waterbesparend</li>
                </ul>
                <p className={styles.text4}>
                Hierdoor weet u zeker dat de restaurants en
                winkels die u bezoekt groen zijn. U kunt deze
                eco-spots herkennen aan het label dat zij in
                hun raam hebben hangen
                </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default GreenGuideLabel;