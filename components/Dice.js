import styles from "../styles/Dice.module.css";
import Image from "next/image";

function Dice(props) {


    return (
        <div>
            <Image
                className={styles.dice}
                width={50}
                height={50}
                src={`/${props.number}.png`}
                alt={props.number}
                onClick={() => props.clicked(props.index)}
            />
            <span className={styles.counter}>{props.nbClick}</span>
        </div>
    );
}

export default Dice;
