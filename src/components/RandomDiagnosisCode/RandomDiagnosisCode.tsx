import React, {useState} from 'react';
import styles from "./RandomDiagnosisCode.module.css"
import {RandomDiagnoseResult} from "../../pages/api/diagnose/diagnose";

const RandomDiagnosisCode = () => {

    const [randomDiagnosisCode, setRandomDiagnosisCode] = useState("");


    const findRandomDiagnosisCode = async () => {
        await fetchRandomDiagnose().then((result) => {
            setRandomDiagnosisCode(`Code: ${result.randomDiagnose.code} Text: ${result.randomDiagnose.text}`);
        });
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

async function fetchRandomDiagnose(): Promise<RandomDiagnoseResult> {
    return await fetch(`/api/diagnose/diagnose`).then((res) => res.json());
}

export default RandomDiagnosisCode;