'use client';

import React, {useState} from 'react';
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
        <div className="m-auto pb-5">
            <button className="inline-block cursor-pointer text-sm leading-none uppercase whitespace-normal font-bold text-center text-white bg-green-700 h-12 mt-2 ml-2" onClick={findRandomDiagnosisCode}>
                Random
            </button>
            {randomDiagnosisCode && <h2 className="text-white h-12 mt-2 ml-2"> {randomDiagnosisCode} </h2>}
        </div>
    );
};

function findRandomDiagnose(): Diagnose {
    return icpc2[Math.floor(Math.random() * icpc2.length)];
}


export default RandomDiagnosisCode;