import RandomDiagnosisCode from "../components/RandomDiagnosisCode/RandomDiagnosisCode";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
            <div className="z-5 items-center justify-between font-mono text-sm flex">
                <RandomDiagnosisCode/>
            </div>
        </main>
)
}