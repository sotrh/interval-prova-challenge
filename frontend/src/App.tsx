import { useRef, useState } from "react";
import "./App.css";
import FormBuilder from "./components/FormBuilder";
import CustomerForm from "./components/CustomerForm";
import FormSubmissionList from "./components/FormSubmissionList";

function App() {
  const handleSupportClick = () => {
    console.log("Opening REDO Customer Support...");
    alert("Welcome to REDO Customer Support! 🎉");
  };

  const [editing, setEditing] = useState(true);

  const [schema, setSchema] = useState({
    fields: [
      { name: "First Name", type: "text" },
      { name: "Last Name", type: "text" },
      { name: "Email", type: "email" },
    ],
  });

  const [submissions, setSubmissions] = useState([]);

  return (
    <div className="app-container">
      {!editing && (
        <>
          <CustomerForm schema={schema}></CustomerForm>
          <button
            className="affirm-button"
            onClick={() => {
              setEditing(true);
            }}
          >
            Edit
          </button>
        </>
      )}
      {editing && (
        <FormBuilder
          schema={schema}
          onSubmit={(newSchema) => {
            setSchema({...newSchema});
            setEditing(false);
            console.log(newSchema);
          }}
        ></FormBuilder>
      )}
      <FormSubmissionList submissions={submissions}></FormSubmissionList>
      <button onClick={handleSupportClick} className="support-button">
        REDO Customer Support
      </button>
    </div>
  );
}

export default App;
