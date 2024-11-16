import React from 'react'
import "../hero.css"
function Hero() {
  return (
    <>
      <section className='hero '>
        <div className='gridlayout '>
            <div className='flexlayout  '>
                <div className='image '>
            <img style={{transition:"all 2s ease"}} className=' ' src={"https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"} alt="develper" />
                </div>
            </div>
            <div className='text1'>
            <h1 className='  '>Developer</h1>
            <p className=' '>
            A developer is a person who creates, builds, and maintains software applications, systems, or websites. They write code in programming languages, debug issues, and design solutions to meet user or business needs. Developers often specialize in areas such as web development, mobile development, or software engineering.</p>
            <button className=''><a href="#">Read More</a></button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
