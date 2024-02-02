import CSS from "./Chatbox.module.css";
import {useState, useEffect} from "react";

interface convoInterface{
    userMessage:string,
    botMessage:string,
}

const Chatbox = () => {
    const [message, setMessage] = useState<string>("");
    const [ prompt, setPrompt] = useState<string>("");
    const [displayPrompt, setDisplayPrompt] = useState<string>("")
    const [convo , setConvo] = useState<Array<convoInterface>>([{
        userMessage:"hi",
        botMessage:"hello",
    }])

    const handleGo = (e): void => {
        setDisplayPrompt(prompt)
    }

    useEffect(()=>{
        setConvo([...convo, {userMessage:displayPrompt, botMessage:"hehe"}])

    }, [displayPrompt])

    console.log(convo)
    

  return (
    <div className={CSS.container}>
        <div className={CSS.history}>History</div>
        <div className={CSS.box}>
            <div className={CSS.convo}>
                {/* display past convo */}
                <div style={{display:"flex",justifyContent:"flex-end",margin:"2em"}}>
                    userMessage
                </div> 
                <div style={{left:"0px"}}>
                    botMessage
                </div>

                {/* display user input */}
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                    {displayPrompt}
                </div>
            </div>
            <div className={CSS.promptContainer}>
                <input type="text" placeholder="Enter a prompt here" className={CSS.prompt}  onBlur={(e)=>{setPrompt(e.target.value)}}/>
                <button onClick={handleGo} className={CSS.promptButton}>Go</button>
            </div>

        </div>
       

    </div>
  )
  }

export default Chatbox