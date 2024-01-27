import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Styles/Button'
import { FaFacebook,FaInstagramSquare,FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
   <Wrapper>
    <section className='contact-short'>
      < div className='grid grid-two-column'> 
        <div>
          <h3>Ready to get started?</h3>
        </div>
          <div>
          <NavLink to='./'>
            <Button>Get Started</Button>
          </NavLink>
          </div>
      </div>
    </section> 
   <footer>
    <div className='container grid grid-four-column'>
   
       <div className='footer-about'>
        <h4>Umesh Chaudhary</h4>
        <p><h4>Umesh Chaudhary</h4>Hi, It's me as a web developer. 
           I loves to create websites as well
           creating new ideas. 
        </p>
       </div>
       <div className='footer-suscribe'>
        <h4>Subscribe to get updates</h4>
         <form action="#">
         <h4>Subscribe to get updates</h4>
          <input type='email'
          autoComplete='off'
          placeholder='Email'
          />
          <br/>
          <input type="submit" value="subscribe"/>
         </form>
       </div>
         
       <div className='footer-heading'> 
        <h4>Follow Us</h4>
       <h4>Follow Us</h4>
       {/* <div className='footer-social'> */}
        <div> 
          <a href='https://www.facebook.com/' target='_blank'>
          <FaFacebook className='footer-icons'/>
          </a>
        </div>
        <div> 
        <a href='https://www.instagram.com/' target='_blank'>
          <FaInstagramSquare className='footer-icons'/>
          </a>
    
         </div>
        <div > 
        <a href='https://www.linkedin.com/feed/' target='_blank'>
          <FaLinkedin className='footer-icons'/>
          </a>
        </div>
     {/* </div> */}
     </div>
     <div className='footer-contact'>
     <h4>Call Us</h4>
      <h4>Call Us</h4>
      <p>+9779815456090</p>
     </div>
   </div>
   <div className='footer-bottom--section'>
   <hr/>
   <div className='container grid grid-two-column'>
    <p className='footer-para'>
      @{new Date().getFullYear()}. All Rights Reserved
    </p>
      <div className='footer-paragraph'>
        <p>
          PRIVACY POLICY
        </p>
       <p>
        TERMS & CONDITION
       </p>
      </div>
   

   </div>
   </div>
   
    </footer> 
   </Wrapper>
  )
}
const Wrapper=styled.section`
.contact-short{
  display:flex;
max-width:60vw;
margin:auto;
padding:0.1rem 2rem 0.1rem 1rem;
background-color:${({theme})=>theme.colors.bg};
border-radius:1rem;
box-shadow:${({theme})=>theme.colors.shadowSupport};
transform:translateY(50%);

.grid div:last-child{
  justify-self:end;
  align-self:right;
  margin-left:30rem;
  margin-top:1.2rem;
  
}
}
.grid{
  display:flex;
  // margin-top:4rem;
}

footer{
  padding:0.1rem 0 0.1rem 0;
  background-color:${({theme})=>theme.colors.footer_bg};
  h4{
    color:${({theme})=>theme.colors.hr};
    margin-bottom:2.4rem;
  }
  p{
    color:${({theme})=>theme.colors.white};
   
  }
  .footer-heading{
    margin-left:5rem;
  }
  .footer-para{
    margin-left:6rem;
  }
  .footer-icons{
    color:${({theme})=>theme.colors.white};
    font-size:1.5rem;
    position:relative;
    cursor:pointer;
  }

  .footer-social{
    display:flex;
    margin-top:2rem;
    gap:0.5rem;
    .div{
      padding:1rem;
      border-radius:50%;
      border: 2px solid${({theme})=>theme.colors.white};
     
  
    }
  }
  
  .footer-bottom--section{
    padding-top:1rem;
    hr{
      margin-bottom:2 rem;
      color:${({theme})=>theme.colors.white};
      height:0.1px;
    }
  }
  .footer-paragraph{
   margin-left:35rem;
  }
  .footer-social{
    margin-left:4rem;
  }
  .footer-contact{
    margin-left:4rem;
  }
  

.footer-about{
  margin-left:15rem;
  width:15%;
}
input{
  border-radius:0.3rem;
  max-width:20rem;
  color:${({theme})=>theme.colors.black};
  padding:0.8rem 1rem 1rem;
  border:1px solid ${({theme})=>theme.colors.border};
  text-transform:uppercase;
  }
input[type="submit"]{
  max-width:10rem;
  margin-top:1rem;
  padding:1rem 1.5rem;
  border-style:solid;
  border-width:0.1rem;
  text-transform:uppercase;
  border-radius:0.3rem;
  color:${({theme})=>theme.colors.shadowSupport};
  font-size:0.9rem;
  cursor:pointer;
  &:hover{
    color:${({theme})=>theme.colors.btn};
    background-color:${({theme})=>theme.colors.white};
    transform:scale (0.9);
    border:1pz solid ${({theme})=>theme.colors.btn};
  }

 
`

export default Footer