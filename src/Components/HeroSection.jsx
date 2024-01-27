import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Styles/Button'
import NoteContext from '../NoteContext'


const HeroSection=()=> {
    
    const {name,image}= useContext(NoteContext);
  
  return (
   <Wrapper>
    <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
            <div>
              <p className='hero-top-data'>This is me,</p>
              <h1 className='hero-heading'>{name}</h1>
              <p className='hero-para'> I am a recent graduate with a strong passion for Information Technology Field.
              I am excited about starting my career in IT Sector and Throughout my career, 
              I had the privilege of working on diverse projects that have honed my expertise in Web Developer.
              </p>
              <Button className="btn hireme-btn">
                <NavLink to='/contact'>Contact Me</NavLink>
              </Button>
              </div>
              <div className='section-hero-image'>
                <picture>
                   <img src={image} alt='um' className='hero-img' />
                </picture>
            </div>

        </div>

    </div>
   </Wrapper>
  )
}
const Wrapper=styled.section`
padding:1rem 3rem;
.section-hero-data{
    display:flex;
    // flex-direction:column;
    justify-content:center;
}
.btn{
    max-width:6rem;
}
.hero-top-data{
    text-transform:uppercase;
    font-weight:500;
    color:${({theme})=>theme.colors.helper};
    font-size:0.8rem;

}
.hero-heading{
    text-transform:uppercase;
    font-size:1rem;
}
.hero-para{
    margin-top:0.1rem;
    margin-button:3.4rem;
    max-width:28rem;
    text-align: start;

}
.section-hero-image{
    display:flex;
    justify-content:center;
    align-items:center;
}
picture{
    text-align:center;
}
.hero-img{
    max-width:40%;

}
}
`

export default HeroSection;