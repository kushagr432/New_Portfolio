import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FiMail, FiLinkedin } from 'react-icons/fi';

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
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.current.reset();
        toast.success("Message sent! I'll get back to you within 24h.", { duration: 5000 });
      } else {
        toast.error('Something went wrong. Please try again.', { duration: 5000 });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.', { duration: 5000 });
    }
  };

  return (
    <section className='w-full pt-20 md:pt-28 pb-16 md:pb-24' name='contact'>
      <div className='max-w-[980px] mx-auto px-6 md:px-8'>
        <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-2'>Get In Touch</p>
        <h2 className='text-2xl md:text-3xl font-bold text-theme-white mb-3'>Contact Me</h2>
        <p className='text-theme-white/55 text-base mb-10 max-w-xl leading-relaxed'>
          Have a project in mind or want a free website audit? Fill out the form below and I'll
          get back to you within 24 hours.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_360px] gap-8 md:gap-12'>
          {/* Form */}
          <form
            className='flex flex-col gap-4'
            ref={form}
            onSubmit={sendEmail}>
            <input
              className='px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-theme-white text-sm placeholder-white/30 outline-none focus:border-accent/60 duration-200'
              type='text'
              placeholder='Your name'
              name='user_name'
              required
            />
            <input
              className='px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-theme-white text-sm placeholder-white/30 outline-none focus:border-accent/60 duration-200'
              type='email'
              placeholder='Email address'
              name='user_email'
              required
            />
            <textarea
              className='px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-theme-white text-sm placeholder-white/30 outline-none focus:border-accent/60 duration-200 resize-none'
              name='message'
              placeholder='Tell me about your project...'
              rows='5'
              required
            />
            <button
              type='submit'
              className='h-12 px-6 flex items-center justify-center gap-2 cursor-pointer bg-accent hover:bg-accent-dark text-white duration-200 rounded-lg text-sm font-semibold w-full sm:w-auto self-start'>
              Send Message <RiSendPlaneFill size={15} />
            </button>
          </form>

          {/* Side info */}
          <div className='flex flex-col gap-4'>
            <div className='bg-white/[0.04] border border-white/10 rounded-xl p-5'>
              <p className='text-theme-white/45 text-xs font-semibold uppercase tracking-widest mb-3'>
                Or reach me directly
              </p>
              <div className='space-y-3'>
                <a
                  href='mailto:kushagr998@gmail.com'
                  className='flex items-center gap-3 text-theme-white/70 hover:text-accent duration-200 text-sm'>
                  <FiMail size={16} className='text-accent' />
                  kushagr998@gmail.com
                </a>
                <a
                  href='https://www.linkedin.com/in/kushagr-jain-40502621b/'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-3 text-theme-white/70 hover:text-accent duration-200 text-sm'>
                  <FiLinkedin size={16} className='text-accent' />
                  linkedin.com/in/kushagr-jain
                </a>
              </div>
            </div>
            <div className='bg-accent/[0.06] border border-accent/20 rounded-xl p-5'>
              <p className='text-accent font-semibold text-sm mb-1'>Free Website Audit</p>
              <p className='text-theme-white/60 text-xs leading-relaxed'>
                Send me your website URL and I'll send back a detailed performance, SEO, and UX
                audit — completely free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
