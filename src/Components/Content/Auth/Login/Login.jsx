import React from 'react';
import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.sign && styles.left}>
            <h1 className={styles.caption}>Sign in</h1>

            <input className={styles.input} type="text" name="email" placeholder="E-mail"/>
            <input className={styles.input} type="password" name="password" placeholder="Password"/>

            <input className={styles.inputSubmit} type="submit" name="signup_submit" value="Sign me up"/>
        </div>
    );
};

export default Login;