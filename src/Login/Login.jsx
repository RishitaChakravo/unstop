import style from '../Login/login.module.css'
import {useState, useEffect} from 'react'
import imgSrc from '../Login/image.png'
import Help from '../Help/Help.jsx'

function Login(){
    const [isResident, setIsResident] = useState(true);
    const [captcha, setCaptcha] = useState("");
    useEffect(() => {
        let newCaptcha = "";
        const arr = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
        for(let i = 0; i<6; i++){
            let n = Math.floor(Math.random()*36);
            newCaptcha += arr[n];
        }
        setCaptcha(newCaptcha);
    }, [])
    return(
    <div className={style.Login}>
        <Help/>
        <div className={style.img}>
            {/* <img src={imgSrc}/> */}
        </div>
        <div className={style.login}>
            <div className={style.container}>
                <h1>Login</h1><br/>
                <p>Do not have an account? <a href=''>Sign-Up</a></p>
                <div className={style.buttons}>
                        <button 
                            className={isResident ? style.active : ""}
                            onClick={() => setIsResident(true)}
                        >
                            Indian Resident Elector
                        </button>
                        <button disabled> | </button>
                        <button 
                            className={!isResident ? style.active : ""}
                            onClick={() => setIsResident(false)}
                        >
                            Indian Overseas Elector
                        </button>
                    </div>

                    {isResident && (
                        <div className={style.resident}>
                            <p>Registered Mobile No./Email ID/EPIC No. *</p>
                            <input type="email" />
                            <p>Password*</p>
                            <input type="password" /><br />
                            <a href=''>Forgot Password?</a>
                        </div>
                    )}

                    {!isResident && (
                        <div className={style.overseas}>
                            <p>Registered Email ID*</p>
                            <input type="email" />
                            <p>Password*</p>
                            <input type="password" /><br />
                            <a href=''>Forgot Password?</a>
                        </div>
                    )}
                    <br/>
                    <div className={style.captcha}>{captcha}</div>
                    <p>Captcha*</p>
                    <input type="password"/>
                    <br></br>
                    <button className={style.enter}>LOGIN</button>
            </div>
        </div>
    </div>
    );
}

export default Login;