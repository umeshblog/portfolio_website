import React, { useContext,useEffect } from 'react'
import NoteContext from '../NoteContext';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { NavLink } from 'react-router-dom';
function Service() {
  const {services,updateServicePage}=useContext(NoteContext);
  useEffect(()=> {
    updateServicePage();
  },[]);
  return (
    <Wrapper>
      <h1 style={{textAlign:"center"}}>Our Services</h1>
      <div className='container grid grid-two-column'>
        {services.map((current)=>{
          const {id,img,title}=current;
          return(
            <div key={id} className='card-service'>
              <figure>
                <img src={img} alt={title}/>
                <div className='card-data'>
                <h4>{title}</h4>
                <NavLink to="./service">
                <Button>Readmore</Button>
                </NavLink>
                </div>
                </figure>
             
            </div>
          )

        })}
      </div>
    </Wrapper>
  )
      }
const Wrapper=styled.section`
background-color:${({theme})=>theme.colors.bg};
.common-heading{
 align-text:center;
}
.container{
  max-width:70rem;
}
figure{
  width:auto;
  display:grid;
  justify-content:center;
  align-items:center;
  position:relative;
  overflow:hidden:
  transition:all 0.5s linear;
  &::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:0%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.5);
    transition:all 0.2s linear;
    cursor:pointer;
  }
  &:hover::after{
    width:100%
  }
  &:hover img{
 transform:scale(1.2);
  }
  img{
    max-width:50%;
    margin-top:1.5 rem;
    height:20rem;
    transition: all 0.2s linear
  
  }
  .card-service{
    display:grid;
  }
  .card-data{
    display:grid;
  }
  
`
export default Service