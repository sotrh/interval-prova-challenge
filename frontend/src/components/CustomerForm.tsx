import React, { useMemo, useRef, useState } from "react";
import { FormSchema } from "../data/form";
import "./CustomerForm.css";

export interface CustomerFormProps {
  schema: FormSchema;
}

function CustomerForm({ schema }: CustomerFormProps) {
  const [fields, setFields] = useState(schema.fields);
  const fieldsUI = useMemo(
    () =>
      fields.map((field, i) => {
        let input;
        switch (field.type) {
          case "select":
          case "textarea":
          case "email":
          case "text":
            input = (
              <input
                className="field-input"
                type={field.type}
                name={field.name}
                onChange={(e) => {

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
    [fields]
  );

  return (
    <div className="container flex-vertical">
      <h1>Customer Form</h1>
      {fieldsUI}
      <button className="affirm-button">Submit</button>
    </div>
  );
}

export default CustomerForm;
