import style from "./login.module.css"


const Login = () => {

    return (
        <div className={style.loginpopmain}>

        <div className={style.login}>
            <h3 className={style.log_h3}>LOGIN OR SIGNUP</h3>
            <p className={style.loginpop_p}>for a quicker checkout</p >

            <i className={style.fa_times_circle}></i>
            <input className={style.input}
            type="text" name="email" placeholder="Enter Mobile/Email"></input>

            <input className={style.input}
            type="password" name="password" placeholder="Enter Password"></input>
            
            <div className={style.button}>CONTINUE</div>

            <div className={style.loginor}>
                <h5 className={style.loginor_h5}>
                    <span  className={style.loginor_span}>Or continue with</span>
                </h5>
            </div> 

            <div className={style.loginother}>
                <span> 
                <img className={style.loginother_img} src="https://www.faballey.com/images/loginfb.png" alt="Facebook"/> 
                </span> 
                <span> 
                <img className={style.loginother_img} src="https://www.faballey.com/images/logingogl.png" alt="Google"/> 
                </span>
            </div>
                
        </div>
        </div>
    )
}

export  {Login}