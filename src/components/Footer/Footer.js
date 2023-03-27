import React, { forwardRef } from 'react'
import linkedin from "../../assets/img/Linkedin-logo-on-transparent-Background-PNG-.png"
import xing from "../../assets/img/xing-icon.svg"
import gmail from "../../assets/img/logo-email.svg"
import github from "../../assets/img/github.svg.png"
import './Footer.scss'

const Footer = forwardRef((props,ref)=> {
  const {ContactRef} = props
  return (
    <div className='footer_wrapper' ref={ContactRef}>
       <div className='contact_icons'>
     <a href='https://www.linkedin.com/in/emuktarbekova'> <img src={linkedin} width='50px' className='png'/></a>
    <a href='https://www.xing.com/profile/Erkinai_Muktarbekova2/cv'> <img src={xing} width='40px' className='png'/></a> 
     <a href='https://github.com/Erkinai31'> <img src={github} width='50px' className='png'/> </a>
      <a href="mailto:emuktarbekova@gmail.com"><img src={gmail} width='50px' className='png'/></a>
    </div>
    </div>
    
  )
}
)
export default Footer