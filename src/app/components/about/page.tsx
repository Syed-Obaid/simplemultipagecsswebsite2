import React from 'react'
import "../about.css"
function About() {
  return (
    <>
    <section id='about' className='about '>
    <div className='gridabout'>
        <div className='about-cont'>
        <h1 className=''>About Us</h1>
        </div>
    <div className='container '>
       <div className='about-img'>

            <img className=' ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmkNqjRN6uJar8WikFzLESszyVp86FrnwAQ&s"  alt="imagee" />
       </div>
            <p className=''> Developer is a professional who designs, creates, and maintains software or applications. They handle various aspects of software development, including writing code, designing systems, testing, and deploying software. Developers often specialize in areas like web development, mobile app development, or systems development, and they collaborate with teams to build functional and user-friendly applications.</p>
{/* <div className='text-center'> */}
    
<button className=''><a href="#">Read More</a></button>
{/* </div> */}
        
        <div className='gridcard '>
          <div className='gridcard1'>
            <h1 className=''>1+</h1>
            <h3 className=''>Years Experience</h3>
            </div>
          <div className='gridcard1'>
            <h1 className=''>20+</h1>
          <h3  className=''>Projects Completed</h3>
          </div>
          <div className='gridcard1'>
          <h1 className=''>10+</h1>
          <h3  className=''>Happy Clients</h3>
          </div>
        </div>

    </div>
    </div>

    </section>
    </>
  )
}

export default About
