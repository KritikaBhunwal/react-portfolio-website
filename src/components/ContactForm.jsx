import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios.post('https://api.example.com/contact', data)
      .then(response => {
        console.log('Form submitted successfully', response);
      })
      .catch(error => {
        console.log('Error submitting form', error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input 
        {...register("name")} 
        type="text" 
        placeholder="Your Name" 
        className="border p-2 w-full"
      />
      <input 
        {...register("email")} 
        type="email" 
        placeholder="Your Email" 
        className="border p-2 w-full"
      />
      <textarea 
        {...register("message")} 
        placeholder="Your Message" 
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default ContactForm;
