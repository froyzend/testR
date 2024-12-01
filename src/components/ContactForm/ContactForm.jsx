import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { FaRegEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    message: Yup.string().required("Message required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const saveLocalStorage = JSON.stringify(values);
    localStorage.setItem("formData", saveLocalStorage);
    resetForm();
  };

  return (
    <section id="contact">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.FormContainer}>
            <h2 className={css.contactTitle}>
              Contact Me
              <FaRegEnvelope className={css.icon} />
            </h2>
            <div className={css.formWrapper}>
              <div className={css.field}>
                <label htmlFor="name" className={css.label}>
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className={css.inputField}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.field}>
                <label htmlFor="email" className={css.label}>
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className={css.inputField}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.field}>
                <label htmlFor="message" className={css.label}>
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  className={css.textareaField}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className={css.error}
                />
              </div>

              <button type="submit" className={css.button}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
