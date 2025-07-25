import React, { useRef } from 'react';
import './App.css';
import FormBuilder from './components/FormBuilder';
import CustomerForm from './components/CustomerForm';

function App() {
  const handleSupportClick = () => {
    console.log('Opening REDO Customer Support...');
    alert('Welcome to REDO Customer Support! 🎉');
  };

  const schema = useRef({ fields: [
    {
      name: "First Name",
      type: "text",
    },
    { name: "Last Name", type: "text" },
    { name: "Email", type: "email" },
  ] });

  return (
    <div className="app-container">
      <CustomerForm schema={schema.current}></CustomerForm>
      {/* <FormBuilder></FormBuilder> */}
      <button onClick={handleSupportClick} className="support-button">
        REDO Customer Support
      </button>
    </div>
  );
}

export default App;