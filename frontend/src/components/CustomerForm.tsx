import React, { useMemo, useRef, useState } from "react";
import { FormSchema, FormSubmission } from "../data/form";
import "./CustomerForm.css";

export interface CustomerFormProps {
  schema: FormSchema;
  onSubmit: (submission: FormSubmission) => void;
}

function CustomerForm({ schema, onSubmit }: CustomerFormProps) {
  const [submission, setSubmission] = useState({
    fields: schema.fields.map((field) => ({ name: field.name, data: "" })),
  });
  const fieldsUI = useMemo(
    () =>
      schema.fields.map((field, i) => {
        let input;
        switch (field.type) {
          // case "select":
          case "textarea":
          case "email":
          case "text":
            input = (
              <input
                className="field-input"
                type={field.type}
                name={field.name}
                onChange={(e) => {
                  submission.fields[i].data = e.target.value;
                  setSubmission({...submission});
                }}
              ></input>
            );
            break;
          default:
            input = <div>Unknown type</div>;
        }
        return (
          <div key={`field-${i}`} className="field">
            <div>{field.name}</div>
            {input}
          </div>
        );
      }),
    [schema]
  );

  return (
    <div className="container flex-vertical">
      <h1>Customer Form</h1>
      {fieldsUI}
      <button
        className="affirm-button"
        onClick={() => {
          onSubmit(submission);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default CustomerForm;
