import { useState, useEffect } from 'react';
import './App.css';

const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
function App() {
  const [field, setField] = useState({
    firstname: '',
    secondname: '',
    email: '',
    phoneNumber: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    setValidate(false);
  }, [field]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (field.firstname && field.secondname && emailPattern.test(field.email) && field.phoneNumber) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  return (
    <div className='form-container'>
      <form className='registration-form' action="">
        {submitted && validate ? <h1 className='error-message'>Registration successful</h1> : null}
        <input className='form-input' type="text" placeholder='FirstName' value={field.firstname} onChange={(e) => setField({ ...field, firstname: e.target.value })} />
        {submitted && !field.firstname ? <span className='error-message'>Enter Name</span> : null}
        <input className='form-input' type="text" placeholder='Second-Name' value={field.secondname} onChange={(e) => setField({ ...field, secondname: e.target.value })} />
        {submitted && !field.secondname ? <span className='error-message'>Enter Second Name</span> : null}
        <input className='form-input' type="email" placeholder='E-mail' value={field.email} onChange={(e) => setField({ ...field, email: e.target.value })} />
        {submitted && (!field.email || !emailPattern.test(field.email)) ? <span className='error-message'>{!field.email ? 'Enter Your Email Id' : 'Enter a valid email'}</span> : null}
        <input className='form-input' type="number" placeholder='Phone Number' value={field.phoneNumber} onChange={(e) => setField({ ...field, phoneNumber: e.target.value })} />
        {submitted && !field.phoneNumber ? <span className='error-message'>Enter Your Phone Number</span> : null}
        <button className='submit-button' type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;