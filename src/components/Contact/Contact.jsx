import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fxnrsps', 'template_ogbtvs6', form.current, 'ZAgtJ-Ck3ikUlOAiG')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
   <section id="contact">
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact__container">
       <div className="contact__options">
         <article className="contact__option">
           <MdOutlineEmail className="contact__option-icon"/>
           <h4>Email</h4>
           <h5>pratibhapborode@gmail.com</h5>
           <a href="mailto:pratibhapborode@gmail.com" target="_blank">Send a message</a>
         </article>

         <article className="contact__option">
           <BsWhatsapp className="contact__option-icon"/>
           <h4>Whatsaap</h4>
           <h5>+91-9483999544</h5>
           <a href="https://api.whatsapp.com/send?phone=+91-9483999544" target="_blank">Send a message</a>
         </article>

         <article className="contact__option">
           <BsInstagram className="contact__option-icon"/>
           <h4>Instagram</h4>
           <h5></h5>
           <a href="https://www.instagram.com/pratibha_pb_/" target="_blank">Send a message</a>
         </article>
       </div>
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder="Your Full Name" required/>
         <input type="email" name="email" placeholder="Your Email" required/>
         <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary' >Send Message</button>

       </form>
     </div>
   </section>


  )
  
  }
