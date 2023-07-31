import BgTriangle from "../icons/BgTriangle"
import IconPaper from "../icons/IconPaper"
import IconRock from "../icons/IconRock"
import IconScissors from "../icons/IconScissors"
import '../App.css'

const Step1rps = ({playGame}) => { 

    return(
        <>
            <div className="ml-4 scale-75">
                <BgTriangle/>
            </div>
            <div className="m-auto grid grid-cols-2 grid-rows-3 gap-6 justify-center place-items-center absolute ml-8">
                <div>
                    <button onClick={() => {playGame("PAPER")}}>
                        <IconPaper/>
                    </button>
                </div>
                <div>
                    <button onClick={() => {playGame("SCISSORS")}}>
                        <IconScissors/>
                    </button>
                </div>
                <div className="col-span-2 flex justify-center">
                    <button onClick={() => {playGame("ROCK")}}>
                        <IconRock/>
                    </button>
                </div>

            </div>
        </>
    )
 }

 export default Step1rps