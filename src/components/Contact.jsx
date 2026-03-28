import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiSendPlaneFill } from 'react-icons/ri';

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    try {
      const response = await fetch('https://formspree.io/f/mayrbnlp', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
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
          Have a project or need help scaling your app?{' '}
          <span className='text-theme-white font-medium'>Let's talk.</span>{' '}
          I respond within 24 hours.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 md:gap-12'>
          {/* Form */}
          <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
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
            <input
              className='px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-theme-white text-sm placeholder-white/30 outline-none focus:border-accent/60 duration-200'
              type='url'
              placeholder='Your website URL (optional)'
              name='website_url'
            />
            <textarea
              className='px-4 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-theme-white text-sm placeholder-white/30 outline-none focus:border-accent/60 duration-200 resize-none'
              name='message'
              placeholder='Describe your project or the problem you need solved...'
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
              <p className='text-theme-white/40 text-xs font-semibold uppercase tracking-widest mb-4'>
                Or reach me directly
              </p>
              <div className='space-y-4'>
                <a
                  href='mailto:kushagr998@gmail.com'
                  className='flex items-center gap-3 text-theme-white/70 hover:text-accent duration-200 text-sm group'>
                  <div className='w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 duration-200'>
                    <FiMail size={15} className='text-accent' />
                  </div>
                  <div>
                    <p className='text-[11px] text-theme-white/35 font-medium uppercase tracking-wider mb-0.5'>Email</p>
                    <p className='text-sm'>kushagr998@gmail.com</p>
                  </div>
                </a>
                <a
                  href='https://wa.me/919541626055'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-3 text-theme-white/70 hover:text-accent duration-200 text-sm group'>
                  <div className='w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 duration-200'>
                    <IoLogoWhatsapp size={16} className='text-accent' />
                  </div>
                  <div>
                    <p className='text-[11px] text-theme-white/35 font-medium uppercase tracking-wider mb-0.5'>WhatsApp</p>
                    <p className='text-sm'>Message me directly</p>
                  </div>
                </a>
                <a
                  href='https://www.linkedin.com/in/kushagr-jain-40502621b/'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-3 text-theme-white/70 hover:text-accent duration-200 text-sm group'>
                  <div className='w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 duration-200'>
                    <FiLinkedin size={15} className='text-accent' />
                  </div>
                  <div>
                    <p className='text-[11px] text-theme-white/35 font-medium uppercase tracking-wider mb-0.5'>LinkedIn</p>
                    <p className='text-sm'>kushagr-jain</p>
                  </div>
                </a>
              </div>
            </div>

            <div className='bg-accent/[0.06] border border-accent/20 rounded-xl p-5'>
              <p className='text-accent font-semibold text-sm mb-1.5'>Free Website Audit</p>
              <p className='text-theme-white/55 text-xs leading-relaxed'>
                Share your URL and I'll send back a full performance, SEO, and UX report — including exactly what to fix and in what order.
              </p>
            </div>

            <div className='bg-white/[0.03] border border-white/10 rounded-xl p-5'>
              <p className='text-theme-white/40 text-xs font-semibold uppercase tracking-widest mb-2'>Availability</p>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
                <span className='text-theme-white/65 text-sm'>Open to new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
