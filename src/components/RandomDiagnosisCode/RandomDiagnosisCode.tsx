'use client';

import React, {useState} from 'react';
import icpc2 from "./data/icpc2.json";

import { Button } from "@navikt/ds-react";

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
        <div>
            <Button variant="primary" size="medium" onClick={findRandomDiagnosisCode}>Random</Button>
            {randomDiagnosisCode && <h2> {randomDiagnosisCode} </h2>}
        </div>
    );
};

function findRandomDiagnose(): Diagnose {
    return icpc2[Math.floor(Math.random() * icpc2.length)];
}


export default RandomDiagnosisCode;