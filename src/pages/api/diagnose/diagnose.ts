import {NextApiRequest, NextApiResponse} from 'next';

import icpc2 from './data/icpc2.json';

export interface Diagnose {
    code: string;
    text: string;
}

export interface RandomDiagnoseResult {
    randomDiagnose: Diagnose;
}

const randomDiagnose = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (req.method !== 'GET') {
        res.status(405).json({message: 'Method not supported'});
        return;
    }

    res.status(200).json({randomDiagnose: findRandomDiagnose()});
};

export function findRandomDiagnose(): Diagnose {
    return icpc2[Math.floor(Math.random() * icpc2.length)];
}

export default randomDiagnose;
