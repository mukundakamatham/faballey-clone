import style from './login.module.css'
import {useState} from "react"

import { Redirect } from "react-router-dom";
export const Login1 = ({ handleLogin }) => {


  const [email,setEmail]= useState("")
  const [pwd1,setPwd1] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password:pwd1 };
    handleLogin(payload);
  };
const face_auth=()=>{
  window.location.href = ""

}

  const google_auth=()=>{
    window.location.href = "http://localhost:2345/auth/google"
  }


  return (
    <div className={style.loginpopmain}>
      <div className={style.login}>
        <h3 className={style.log_h3}>LOGIN OR SIGNUP</h3>
        <p className={style.loginpop_p}>for a quicker checkout</p>

        <i className={style.fa_times_circle}></i>
        <input
          className={style.input}
          type="text"
          name="email"
          onChange={(e)=>{setEmail(e.target.value);}} 
          placeholder="Enter Mobile/Email"
        ></input>
  <input
          className={style.input}
          type="text"
          name="password"
          onChange= {(e)=>setPwd1(e.target.value)}
          placeholder="Enter password"
        ></input>

        <div  onClick={handleSubmit} className={style.button}>CONTINUE</div>

        <div className={style.loginor}>
          <h5 className={style.loginor_h5}>
            <span className={style.loginor_span}>Or continue with</span>
          </h5>
        </div>

        <div className={style.loginother}>
          <span>
            <img
              className={style.loginother_img}
              src="https://www.faballey.com/images/loginfb.png"
              alt="Facebook"
              onClick={face_auth} 
            />
          </span>
          <span>
            <img
              className={style.loginother_img}
              src="https://www.faballey.com/images/logingogl.png"
              alt="Google"
              onClick={google_auth} 
            />
          </span>
        </div>
      </div>
    </div>
  )
}

