import { useState } from "react"
import Step1rps from "./Step1rps"
import Step2rps from "./Step2rps"
import Rpsrules from "./Rpsrules"
import Popup from 'reactjs-popup';
import IconClose from "../icons/IconClose";
import '../App.css'

const RpsGame = ({ score, setScore }) => { 
    
    const [step, setStep] = useState(1)
    const [result, setResult] = useState(0)

    const [showRules, setShowRules] = useState(false)
    const closeModal = () => setShowRules(false);
    

    const options = ["ROCK", "PAPER", "SCISSORS"]
        
    const [playerPick, setPlayerPick] = useState(null)
    const [IApick, setIApick] = useState(null)

    function playGame(pick){
        setIApick(null)
        setPlayerPick(null)
        setPlayerPick(pick)

        setTimeout(() => {    
            var iaRandom = (options[Math.floor(Math.random()*options.length)])
            handleLogic(iaRandom, pick)
            setIApick(iaRandom)
        }, 500);
              
        setStep(step+1)
    }

    function handleLogic(ia, player){  
        //TIE
        if (ia === player) {setResult(3)} 
        //IA picks ROCK
        else if (ia === "ROCK" && player === "PAPER") {setResult(1)} //"YOU WIN"
        else if (ia === "ROCK" && player === "SCISSORS") {setResult(2)} //"YOU LOSE"
        //IA picks PAPER
        else if (ia === "PAPER" && player === "ROCK") {setResult(2)} //"YOU LOSE"
        else if (ia === "PAPER" && player === "SCISSORS") {setResult(1)}
        //IA picks SCISSORS
        else if (ia === "SCISSORS" && player === "ROCK") {setResult(1)} //"YOU WIN"
        else if (ia === "SCISSORS" && player === "PAPER") {setResult(2)}
    }

    return(
        <>        
            {step === 1 ? <Step1rps playGame={playGame}/> : ""}
            {step === 2 ? <Step2rps 
                                    playerPick={playerPick}
                                    IApick={IApick}
                                    result={result}
                                    score={score}
                                    setScore={setScore}
                                    step={step} setStep={setStep}/> : ""}

            <div className="absolute bottom-20 right-24">
                <button className="w-36 h-10 border-2 rounded-lg text-white 
                                font-semibold hover:bg-white hover:text-[hsl(239,47%,19%)] 
                                pl-10 pr-10 "
                        onClick={() => {setShowRules(true)}}
                >
                    RULES
                </button>
            </div>

            <Popup              
                open={showRules} 
                onClose={closeModal} 
                modal
                nested
                closeOnEscape
                // lockScroll
                repositionOnResize
                // closeOnDocumentClick
                position="top" 
            >  
                <div className="absolute bottom-20 right-44">
                    <button onClick={closeModal}>
                        <IconClose/>
                    </button>
                </div>
                <Rpsrules />
            </Popup>

        </>
    )
}

export default RpsGame