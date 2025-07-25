import { useRef, useState } from "react";
import "./App.css";
import FormBuilder from "./components/FormBuilder";
import CustomerForm from "./components/CustomerForm";
import FormSubmissionList from "./components/FormSubmissionList";
import { FormSubmission } from "./data/form";

function App() {
  const handleSupportClick = () => {
    console.log("Opening REDO Customer Support...");
    alert("Welcome to REDO Customer Support! 🎉");
  };

  const [editing, setEditing] = useState(false);

  const [schema, setSchema] = useState({
    fields: [
      { name: "First Name", type: "text" },
      { name: "Last Name", type: "text" },
      { name: "Email", type: "email" },
    ],
  });

  const [submissions, setSubmissions] = useState([] as FormSubmission[]);

  return (
    <div className="app-container">
      {!editing && (
        <>
          <CustomerForm
            schema={schema}
            onSubmit={(newSubmission) => {
              setSubmissions([...submissions, newSubmission]);
            }}
          ></CustomerForm>
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
      {!editing && submissions.length > 0 && (
        <FormSubmissionList submissions={submissions}></FormSubmissionList>
      )}
      {editing && (
        <FormBuilder
          schema={schema}
          onSubmit={(newSchema) => {
            setSchema({ ...newSchema });
            setEditing(false);
            console.log(newSchema);
          }}
        ></FormBuilder>
      )}
      <button onClick={handleSupportClick} className="support-button">
        REDO Customer Support
      </button>
    </div>
  );
}

export default App;
