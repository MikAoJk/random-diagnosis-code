'use client';

import React, {useState} from 'react';
import icpc2 from "./data/icpc2.json";


export interface Diagnose {
    code: string;
    text: string;
}

const RandomDiagnosisCode = () => {

    const [randomDiagnosisCode, setRandomDiagnosisCode] = useState<Diagnose>();


    const findRandomDiagnosisCode = async () => {
        const randomDiagnose = findRandomDiagnose()
        setRandomDiagnosisCode(randomDiagnose);
    }

    return (
        <div className="flex min-h-screen flex-col p-16 md:items-center md:p-24">
            <button type="button"
                    className="mb-6 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-4xl px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={findRandomDiagnosisCode}>Random
            </button>
            {randomDiagnosisCode && <h1 className="text-3xl"> {`Code: ${randomDiagnosisCode.code}`} </h1>}
            {randomDiagnosisCode && <h1 className="text-3xl"> {`Text: ${randomDiagnosisCode.text}`} </h1>}
        </div>
    );
};

function findRandomDiagnose(): Diagnose {
    return icpc2[Math.floor(Math.random() * icpc2.length)];
}


export default RandomDiagnosisCode;
