import IconPaper from "../icons/IconPaper"
import IconRock from "../icons/IconRock"
import IconScissors from "../icons/IconScissors"
import { useEffect } from "react"
import '../App.css'

const Step2rps = ({playerPick, IApick, result, score, setScore, step, setStep}) => { 

    useEffect(() => {
        if(IApick){
            if(result === 1){setScore(score+1)}
            else if(result === 2){setScore(score-1)}
        }
    },[IApick])


    return(
        <div className="m-auto grid grid-cols-2 grid-rows-8 gap-4  text-sm">
            {/* <div className={result === 1 ? "btn-winner-bg step2-option-btn" : "step2-option-btn"}> */}
            <div className="step2-option-btn">
                    {playerPick === "ROCK" ? <IconRock/> : null}
                    {playerPick === "PAPER" ? <IconPaper /> : null}
                    {playerPick === "SCISSORS" ? <IconScissors/> : null}
            </div>
            {/* <div className={result === 2 ? "btn-winner-bg step2-option-btn" : "step2-option-btn"}> */}
            <div className="step2-option-btn">
                {IApick === "ROCK" ? <IconRock/> : null}
                {IApick === "PAPER" ? <IconPaper /> : null}
                {IApick === "SCISSORS" ? <IconScissors/> : null}
            </div>
            <div className="text-white font-bold flex justify-center">
                YOU PICKED
            </div>
            <div className="text-white font-bold flex justify-center">
                THE HOUSE PICKED
            </div>
            {IApick ? 
                <div className="col-span-2 flex justify-center mt-10">
                    <div className="result">
                        {result === 1 ? <div>YOU WIN</div> : 
                        result === 2 ? <div>YOU LOSE</div> : 
                        result === 3 ? <div>TIE</div> : ""}
                    </div>
                </div> 
                : ""}
                <div className="col-span-2 flex justify-center">
                    <button className="play-again-btn" onClick={() => {setStep(step-1)}}>
                        PLAY AGAIN
                    </button>            
                </div>

        </div>
    )
 }

 export default Step2rps