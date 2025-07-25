import React, { useMemo, useState } from "react";
import { FormField, FormSchema } from "../data/form";
import "./FormBuilder.css";

export interface FormBuilderProps {
  schema: FormSchema;
  onSubmit: (schema: FormSchema) => void;
}

function FormBuilder({ schema, onSubmit }: FormBuilderProps) {
  const [fields, setFields] = useState(schema.fields);

  const fieldsUI = useMemo(() => fields.map((field, i) => (
    <EditField
      key={`edit-field-${i}`}
      field={field}
      onChange={(field) => {
        fields[i] = field;
        setFields([...fields]);
      }}
    ></EditField>
  )), [fields]);

  return (
    <div className="container flex-vertical">
      <h1>Form Builder</h1>
      {fieldsUI}
      <button
        className="affirm-button"
        onClick={() => {
          setFields([...fields, { name: "New Field", type: "text" }]);
        }}
      >
        Add Field
      </button>
      <button
        className="affirm-button"
        onClick={() => {
          onSubmit({fields});
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default FormBuilder;

interface EditFieldProps {
  field: FormField;
  onChange: (field: FormField) => void;
}

function EditField(props: EditFieldProps) {
  const [name, setName] = useState(() => props.field.name);
  const [type, setType] = useState(() => props.field.type);

  return (
    <div className="edit-field">
      <div>Name</div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <div>Type</div>
      <select
        name="type"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="text">Text</option>
        <option value="email">Email</option>
        <option value="select">Select</option>
      </select>
    </div>
  );
}
