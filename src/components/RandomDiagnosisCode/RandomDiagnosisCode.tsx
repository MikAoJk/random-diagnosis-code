import React, {useState} from 'react';
import styles from "./RandomDiagnosisCode.module.css"
import icpc2 from "./data/icpc2.json";

export interface Diagnose {
    code: string;
    text: string;
}

const RandomDiagnosisCode = () => {

    const [randomDiagnosisCode, setRandomDiagnosisCode] = useState("");


    const findRandomDiagnosisCode = async () => {
        const randomDiagnose = findRandomDiagnose()
        setRandomDiagnosisCode(`Code: ${randomDiagnose.code} Text: ${randomDiagnose.text}`);
    }

    return (
        <div className={styles.container}>
            <button className={styles.video_game_button} onClick={findRandomDiagnosisCode}>
                Random
            </button>
            {randomDiagnosisCode && <h2 className={styles.h2}> {randomDiagnosisCode} </h2>}
        </div>
    );
};

function findRandomDiagnose(): Diagnose {
    return icpc2[Math.floor(Math.random() * icpc2.length)];
}


export default RandomDiagnosisCode;