import css from "./RegisterForm.module.css";
export const RegisterForm = () => {
  return (
    <>
      <div className={css.background}>
        <div className={css.shape}></div>
        <div className={css.shape}></div>
      </div>
      <form className={css.form}>
        <h3>Register Here</h3>

        <label className={css.label} htmlFor="username">
          Username
        </label>
        <input className={css.input} type="text" id="username" />

        <label className={css.label} htmlFor="username">
          Email
        </label>
        <input className={css.input} type="email" id="email" />

        <label className={css.label} htmlFor="password">
          Password
        </label>
        <input className={css.input} type="password" id="password" />

        <button className={css.button}>Register</button>
      </form>
    </>
  );
};
