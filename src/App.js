import React, { useState } from 'react';
import * as yup from 'yup';
import './App.css';
import Form from './component/Form';
import schema from './validation/FormSchema';

const initialFormValues = {
   username: '',
   email: '',
   password: '',
   tos: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: '',
}
function App() {
  const [ formValues ,  setFormValues] = useState(initialFormValues);
  const [ formErrors, setFormErrors] = useState(initialFormErrors);
  const handleSubmit = (e) => {
    //wip
  }

  const validate = (name, value) => {
    yup.reach( schema, name)
    .validate(value)
    .then(()=> setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name,value);
    setFormValues({...formValues, [name]: value}); 
  }

  return (
    <div className="App">
      <Form values={formValues} change={handleChange} />
    </div>
  );
}

export default App;
