import React from 'react'
import "../contact.css"
function Contact() {
  return (
   <>
     <section  className='contact'>
     <div className='contact-cont'>
        <h1 className=''>Contact Us</h1>
        </div>
        <div className='grid-contact '>
            <div className='flex-contact '>
               
                <div className='cnt1'>
             <h1 className=''>Let's Talk</h1>
             <p>I'm open to discussing web developmentprojects or partnership opportunities.</p>
          <div className='contact12'>
        
            <svg className='email' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="m3.62 6.389 8.396 6.724 8.638-6.572-7.69-4.29a1.975 1.975 0 0 0-1.928 0L3.62 6.39Z"/>
  <path d="m22 8.053-8.784 6.683a1.978 1.978 0 0 1-2.44-.031L2.02 7.693a1.091 1.091 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043V8.053Z"/>
</svg>

            <a href="mailto:syedobaidullahsharif@gmail.com" className='mailline'>
                youremail@example.com
            </a>

          </div>


          <div className='contact12'>
           
            <svg className='email' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
</svg>

            <span>+92 3113327794</span>

          </div>



          <div className='contact12'>
          
            <svg className='email' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
</svg>

           <span>Karachi, Sindh , Pakistan</span>

          </div>



                </div>
            </div>
            <div className='cnt2'>
            


<form className=''>
<div>
    <label htmlFor="name" className='block1'>Your Name</label>
    <input type="text" className='' placeholder='Enter Your Name'/>
</div>
<div>
    <label htmlFor="email" className='block1'>Email</label>
    <input type="text" className='' placeholder='Enter Your Email'/>
</div>
<div>
    <label htmlFor="message" className='block1'>Message</label>
    <textarea  className='' rows={5} placeholder='Enter Your Message'/>
</div>
<button className=''><a href="#">Send</a></button>
</form>


            </div>
        </div>
      </section>
   </>
  )
}

export default Contact
