import IconPaper from "../icons/IconPaper"
import IconRock from "../icons/IconRock"
import IconScissors from "../icons/IconScissors"
import { useEffect } from "react"
import './RpsGame.css'

const Step2rps = ({playerPick, IApick, result, score, setScore, step, setStep}) => { 

    useEffect(() => {
        if(IApick){
            if(result === 1){setScore(score+1)}
            else if(result === 2){setScore(score-1)}
        }
    },[IApick])


    return(
        <div className="step2-container">
            <div className="step2-option-btn lg:justify-start">
                    {playerPick === "ROCK" ? <IconRock/> : null}
                    {playerPick === "PAPER" ? <IconPaper /> : null}
                    {playerPick === "SCISSORS" ? <IconScissors/> : null}
            </div>
            <div className="step2-option-btn lg:justify-end lg:ml-40">
                {IApick === "ROCK" ? <IconRock/> : null}
                {IApick === "PAPER" ? <IconPaper /> : null}
                {IApick === "SCISSORS" ? <IconScissors/> : null}
            </div>
            <div className="picked-label lg:justify-center lg:mr-36">
                YOU PICKED
            </div>
            <div className="picked-label lg:justify-end lg:mr-10">
                THE HOUSE PICKED
            </div>
            {IApick ? 
                <div className="col-span-2 flex justify-center mt-10 lg:-mt-[25rem]">
                    <div className="result">
                        {result === 1 ? <div>YOU WIN</div> : 
                        result === 2 ? <div>YOU LOSE</div> :
                        result === 3 ? <div>TIE</div> : ""}
                    </div>
                </div> 
                : <div className="col-span-2 flex justify-center mt-10 lg:-mt-[25rem]"> </div>}
                <div className="col-span-2 flex justify-center lg:-mt-[35rem]">
                    <button className="play-again-btn" onClick={() => {setStep(step-1)}}>
                        PLAY AGAIN
                    </button>            
                </div>

        </div>
    )
 }

 export default Step2rps