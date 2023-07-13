
import classes from './Login.module.css';


const Login = (props) =>{

    const LoginHandler = (e) =>{
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        props.login();
    }

    return <div className={classes.rightPart}>
         <div className={classes.board}>
            <h1>Board.</h1>
         </div>
     <div className={classes.login}>
        <div className={classes.loginheader}>
            <h2>Sign In </h2>
            <p>sign in to your account</p>
        </div>
        <div className={classes.socialAcc}>
            <div className={classes.google}></div>
            <div className={classes.apple}></div>
        </div>
        <form onSubmit={LoginHandler}  className={classes.loginForm}>
           <div className={classes.emailContainer}>
           <label htmlFor="email" >Email address</label>
            <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
           </div>
           <div className="passwordContainer">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" />
           </div>
           <div className={classes.forgetPassword}>
             <p>Forget Password?</p>
           </div>
           <div className="signInBtn">
            <button type="submit" className={classes.submitBtn} >Sign In</button>
           </div>
        </form>

        <div className={classes.signup}>
            <p>Don’t have an account? <span>Register here</span> </p>
        </div>
     </div>
    </div>
};

export default Login;