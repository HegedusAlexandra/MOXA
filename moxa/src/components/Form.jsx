import React,{useCallback} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { motion } from "framer-motion";
import colors from '../colors'

const Form = () => {
  // Define a Yup schema with stricter checks
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required('Name is required').min(8, 'Name is too short').matches(/^[a-zA-Z0-9 ]*$/, 'Only alphanumeric characters and spaces are allowed in the name'),
    email: Yup.string().trim().email('Invalid email').required('Email is required'),
    telephone: Yup.string()
      .trim()
      .matches(/^[0-9]+$/, 'Invalid telephone number')
      .min(10, 'Telephone number is too short')
      .max(15, 'Telephone number is too long')
      .required('Telephone is required'),
    message: Yup.string().trim().matches(/^[a-zA-Z0-9 .-:?!@#()]*$/, 'Only regular characters are allowed in the message'),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
    // Add your submission logic here
  };

  // Extract the common input structure to a function
  const simpleInput = useCallback((name, type, label) => (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="form__group field">
          <input
            type={type}
            placeholder={label}
            {...field}
            className="form__field"
            id={name}
            required
          />
          <label htmlFor={name} className="form__label">
            {label}
          </label>
          {fieldState.error && <div className="text-red-500">{fieldState.error.message}</div>}
        </div>
      )}
    />
  ), [control]);

  return (
    <form className="w-[100%] h-[100%]" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[100%] h-[100%] p-4 flex flex-col">
        <div className="flex flex-row mb-4">
          {simpleInput('name', 'text', 'Name')}
          {simpleInput('email', 'email', 'Email')}
          {simpleInput('telephone', 'tel', 'Telephone')}
        </div>
        <div className="flex flex-row mb-4">
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <div className="form__group field">
                <textarea
                  autoComplete={false}
                  rows={3}
                  className="form__field_long"
                  id="message"
                  {...field}
                ></textarea>
                <label htmlFor="message" className="form__label">
                  Message
                </label>
                {fieldState.error && <div className="text-red-500 w-[200%]">{fieldState.error.message}</div>}
              </div>
            )}
          />
        </div>
        <div>
          <motion.button whileHover={{ scale:1.1, color:colors.cyan_50}} type="submit" className="w-[30%] h-[10%] p-2 rounded-xl bg-cyan-950 border-4 border-solid border-cyan-950 font-montserrat text-cyan-100" onClick={() => onSubmit('call')}>
            I want a call
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} type="submit" className="w-[30%] h-[10%] p-2 rounded-xl border-4 border-solid border-cyan-950 ml-6 font-montserrat text-cyan-950 font-bold" onClick={() => onSubmit('email')}>
            I want an email
          </motion.button>
        </div>
      </div>
    </form>
  );
};

export default Form;
