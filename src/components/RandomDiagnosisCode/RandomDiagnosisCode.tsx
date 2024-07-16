'use client';

import React, {useState} from 'react';
import icpc2 from "./data/icpc2.json";

import {Button, Heading} from "@navikt/ds-react";

export interface Diagnose {
    code: string;
    text: string;
}

const RandomDiagnosisCode = () => {

    const [randomDiagnosisCode, setRandomDiagnosisCode] = useState<Diagnose>(null);


    const findRandomDiagnosisCode = async () => {
        const randomDiagnose = findRandomDiagnose()
        setRandomDiagnosisCode(randomDiagnose);
    }

    return (
        <div className="flex min-h-screen flex-col p-16 md:items-center md:p-24">
                <Button variant="primary" size="medium" onClick={findRandomDiagnosisCode}>Random</Button>
                {randomDiagnosisCode && <Heading size="large" level="1" spacing>{'Code: ${randomDiagnose.code} Text: ${randomDiagnose.text}'}}
        </div>
    );
};

function findRandomDiagnose(): Diagnose {
    return icpc2[Math.floor(Math.random() * icpc2.length)];
}


export default RandomDiagnosisCode;
