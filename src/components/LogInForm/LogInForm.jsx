import css from "./LogInForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import toast from "react-hot-toast";

export const LogInForm = () => {
  const dispatch = useDispatch();

  const contactSchema = Yup.object().shape({
    password: Yup.string().min(7, "Too Short!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const userId2 = useId();
  const userId3 = useId();

  return (
    <>
      <div className={css.background}>
        <div className={css.shape}></div>
        <div className={css.shape}></div>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(login(values))
            .unwrap()
            .then(() => {
              toast.success("Login success");
            })
            .catch(() => {
              toast.error("Login error");
            });
          actions.resetForm();
        }}
        validationSchema={contactSchema}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <ErrorMessage className={css.err} name="name" component="p" />
            <label className={css.label} htmlFor={userId2}>
              Email
            </label>
            <Field
              className={css.input}
              type="text"
              name="email" // corrected name prop
              id={userId2}
            />
            <ErrorMessage className={css.err} name="email" component="p" />
            <label className={css.label} htmlFor={userId3}>
              Password
            </label>
            <Field
              className={css.input}
              type="password"
              name="password" // corrected name prop
              id={userId3}
            />
            <ErrorMessage className={css.err} name="password" component="p" />
            <button
              className={css.button}
              type="submit"
              disabled={isSubmitting}
            >
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
