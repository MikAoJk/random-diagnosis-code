import React, {useState} from 'react';
import styles from "./RandomDiagnosisCode.module.css"

const RandomDiagnosisCode = () => {

    const [randomDiagnosisCode, setRandomDiagnosisCode] = useState("");


    const findRandomDiagnosisCode = () => {
        //Todo choose one from json file
        setRandomDiagnosisCode('Z09');
    }

    return (
        <div>
            {randomDiagnosisCode && <h2 className={styles.h2}> {randomDiagnosisCode} </h2>}
            <button className={styles.video_game_button} onClick={findRandomDiagnosisCode}>
                Random
            </button>
        </div>
    );
};

export default RandomDiagnosisCode;