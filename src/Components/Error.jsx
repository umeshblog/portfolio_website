import React from 'react'
import styled from 'styled-components'
import error from '../image/error.jpg'
import { Button } from '../Styles/Button'
import { NavLink } from 'react-router-dom'
function Error() {
  return (<Wrapper>
 <img src={error}alt='error' width='100%'/>
 <NavLink to='./'>
 <Button className='btn'>Go back</Button>
 </NavLink>
    </Wrapper>
  )
}
const Wrapper=styled.section`

padding:1 rem 0;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

.btn{
    font-size:1rem;
    margin-top:1rem;
}
`

export default Error