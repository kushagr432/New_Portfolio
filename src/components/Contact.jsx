import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { RiSendPlaneFill } from 'react-icons/ri';
import { i18n } from '../locale/i18n';

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    try {
      const response = await fetch('https://formspree.io/f/mayrbnlp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        }
      });

      if (response.ok) {
        form.current.reset();
        toast.success(i18n.t('toast.contact.success'), { duration: 5000 });
      } else {
        toast.error(i18n.t('toast.contact.error'), { duration: 5000 });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(i18n.t('toast.contact.error'), { duration: 5000 });
    }
  };

  return (
    <section className='w-full pb-5 md:pb-9 pt-12 md:pt-24' name='contact'>
      <div className='max-w-[900px] mx-auto px-8'>
        <h1 className='font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1'>
          {i18n.t('contactSection.sectionName')}
        </h1>
        <p className='text-base 2xl:text-lg'>{i18n.t('contactSection.intro')}</p>
        <form
          className='flex flex-col w-full max-w-[600px] mx-auto pt-12'
          ref={form}
          onSubmit={sendEmail}>
          <input
            className='p-2 2xl:p-2.5 rounded-sm bg-theme-white text-theme-black text-lg outline-none'
            type='text'
            placeholder={`${i18n.t('contactSection.placeholders.placeholderName')}`}
            name='user_name'
            required
          />
          <input
            className='p-2 2xl:p-2.5 my-3 md:my-4 rounded-sm bg-theme-white text-theme-black text-lg outline-none'
            type='email'
            placeholder='Email'
            name='user_email'
            required></input>
          <textarea
            className='rounded-sm bg-theme-white p-2 2xl:p-4 text-theme-black text-lg outline-none'
            name='message'
            placeholder={`${i18n.t('contactSection.placeholders.placeholderMessage')}`}
            rows='6'
            required></textarea>
          <button
            type='submit'
            className='h-12 md:h-auto py-[4px] 2xl:py-1.5 px-3 flex items-center justify-center cursor-pointer hover:text-white active:text-white duration-200 bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 rounded text-lg mt-3 md:mt-5 mx-auto font-medium'>
            {i18n.t('contactSection.button')} <RiSendPlaneFill className='ml-1' />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
