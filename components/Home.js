import Dice from "./Dice";
import styles from "../styles/Home.module.css";
import { useState } from "react";

function Home() {
    const [numbers, setNumbers] = useState([]);
    console.log("nb",numbers)
    function randomNumber() {
        const randomNumbers = [];
        for (let i = 0; i < 5; i++) {
            randomNumbers.push({ nb: Math.floor(Math.random() * 6) + 1, clicked: 0 });
        }
        return randomNumbers;
    }

    const clicked = (index)=>{
      setNumbers(numbers.map((v,i)=>index===i ? {nb: Math.floor(Math.random() * 6) + 1,clicked: v.clicked+1} :{nb:v.nb ,clicked: v.clicked}))
    }

    const total = numbers.reduce((a, nb) => a + (nb?.nb || 0), 0);
    const handleDice = indexDice => {
        setNumbers(numbers.map((nb, i) => (i === indexDice ? Math.floor(Math.random() * 6) + 1 : nb)));
    };

    const dices = numbers.map((nb, i) => {
      console.log(nb)
        return (
            <Dice
                key={i}
                index={i}
                number={nb.nb}
                nbClick={nb.clicked}
                handleDice={handleDice}
                clicked={clicked}
            />
        );
    });

    const handleClick = () => {
        setNumbers(randomNumber());
    };

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.triangleLeft}></div>
                <div className={styles.triangleLeftRed}></div>
                <div className={styles.triangleLeft}></div>
            </div>
            <div className={styles.middleSection}>
                <img
                    src="logo.png"
                    alt="Logo"
                    className={styles.logo}
                />
                <div className={styles.board}>{dices}</div>
                <div className={styles.total}>
                    <span>
                        total : <span id="total">{total}</span>
                    </span>
                </div>
                <button
                    className={styles.launchBtn}
                    onClick={() => handleClick()}
                >
                    Launch
                </button>
            </div>
            <div>
                <div className={styles.triangleRight}></div>
                <div className={styles.triangleRightRed}></div>
                <div className={styles.triangleRight}></div>
            </div>
        </div>
    );
}

export default Home;
