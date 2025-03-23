import { useState, useEffect} from "react";
import style from '../Help/help.module.css'

function Help(){
    const [isVisible, setVisibilty] = useState(false);
    const [isDark, setIsDark] = useState(false); 
    const [fontSize, setFontSize] = useState(16);

    useEffect(() => {
        if(isDark){
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            document.body.style.transition = 'all 0.2s ease';
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.body.style.transition = 'all 0.2s ease';
        }
    }, [isDark]);

    useEffect(() => {
        if( fontSize >= 0){
            document.body.style.fontSize = `${fontSize}px`
        }
    }, [fontSize])

    return(
        <>
            <div className={style.help}>
            <button onClick={() => {setVisibilty( isVisible ? false : true)}} style={{fontSize:'23px'}}>♿</button>
            <div style={{display: isVisible ? "block" : "none"}}>
                <ul style={{listStyle: 'none'}} className={style.Button}>
                    <li><button onClick={() => setFontSize(f => f - 1)}>-A</button></li>
                    <li><button onClick={() => setFontSize(16)}>A</button></li>
                    <li><button onClick={() => setFontSize(f => f + 1)}>+A</button></li>
                    <li ><button onClick={() => setIsDark(!isDark)} style={{fontSize : "20px"}}>
                        {isDark ? "🌞" : "🌛"}
                    </button></li>
                </ul>
            </div>
            </div>
        </>
    );
}

export default Help;