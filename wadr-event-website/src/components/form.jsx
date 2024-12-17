import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS properly

const MyForm = () => {
  useEffect(() => {
    emailjs.init('z0UNJ9s6Ku0hYXJQw');
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);

  const handleSubmit = async (values, {resetForm }) => {
    setIsSubmitting(true);

    try {
      // Include the sender's email and name in the templateParams
      const templateParams = {
        from_name: values.name,
        // to_name: values.name,
        reply_to: values.email,
        message: values.message,
      };

      await emailjs.send('service_4gxyegf', 'template_jay0oxw', templateParams);
      setIsFormSent(true);

      // Reset the form after 5 seconds and allow the user to submit again
      setTimeout(() => {
        setIsFormSent(false);
        setIsSubmitting(false);
        resetForm(); // Reset the form fields to their initial state
      }, 5000);
    } catch (error) {
      console.error('Email error:', error);
      // Handle error response, if needed
      setIsSubmitting(false);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    }

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
    <Formik initialValues={{ name: '', email: '', Cname: '', message: '' }} onSubmit={handleSubmit} validate={validateForm}>
      <Form className='bg-gray p-0 md:p-14 rounded-md'>
        <div className='mb-4'>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-black" >Email:</label>
          <Field type="email" id="email" name="email" className="border border-green-1 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" />
          <ErrorMessage name="email" component="div" className="text-red py-2 text-sm" />
        </div>
        <div className='mb-4'>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Name:</label>
          <Field type="text" id="name" name="name" className="border border-green-1 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" />
          <ErrorMessage name="name" component="div" className="text-red py-2 text-sm" />
        </div>
        <div className='mb-4'>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black" >Company Name:</label>
          <Field type="text" id="Cname" name="Cname" className="border border-green-1 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" />
        </div>
        <div className='mb-4'>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Message:</label>
          <Field as="textarea" id="message" name="message" className="border border-green-1 text-black text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" />
          <ErrorMessage name="message" component="div" className="text-red py-2 text-sm" />
        </div>
        <button type="submit" className='bg-yellow hover:bg-purple px-8 py-3 text-white' disabled={isSubmitting}>
          {isSubmitting ? (isFormSent ? 'Sent' : 'Sending...') : 'Submit'}
        </button>
      </Form>
    </Formik>
  );
};

export default MyForm;