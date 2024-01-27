import React from 'react'
import styled from 'styled-components'

function Contact() {
  return (
  <Wrapper>
    <section>
    <h2 className='common-heading'>Feel Free to Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27778174562!2d85.28484726307028!3d27.709030216245136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1706175913467!5m2!1sen!2snp" 
    width="100%" height="450" 
    style={{border:0 }}
    allowfullscreen=""
     loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <div className='container'>
        <div className='contact-form'>
          <form action='https://formspree.io/f/mjvngozd' method='POST'>
            <input type='text' name='Username'
             placeholder='Please enter your Username' 
             autoComplete='off'
              required/>
               <br/> 
               <br/>
            <input type='email' name='email'
             placeholder='Please enter your Email' 
             autoComplete='off'
              required/>
              <br/>
              <br/>
              <textarea
              name='message'
              cols="30"
              rows="6"
              autoComplete='off'
              required
              >

              </textarea>
              <br/>
              <br/>
              <input type='submit' value='send'/>

          </form>
        </div>
      </div>
      </section>
  </Wrapper>
  )
}
const Wrapper=styled.section`
padding 9rem 0 5rem 0;
.container{
  margin-top:6rem;
  text-align:center;
}
.common-heading{
  text-align:center;
}
input[type=text], select, textarea {
  width: 30%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
input[type=email], select, textarea {
  width: 30%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
input[type="submit"]{
  max-width:10rem;
  margin-top:1rem;
  padding:1rem 1.5rem;
  border-style:solid;
  border-width:0.1rem;
  text-transform:uppercase;
  font-size:0.9rem;
  cursor:pointer;
  &:hover{
    color:${({theme})=>theme.colors.btn};
    background-color:${({theme})=>theme.colors.white};
    transform:scale (0.9)
    border:1pz solid ${({theme})=>theme.colors.btn};
  }


}
input{
  max-width:30rem;
  color:${({theme})=>theme.colors.black};
  padding:1.6rem 2.4rem;
  border:1px solid ${({theme})=>theme.colors.border};
  text-transform:uppercase;
  box-shadow:${({theme})=>theme.colors.shadowSupport};

}

`
export default Contact