import React, { useRef, useState } from "react";
import { FormSchema } from "../data/form";
import "./CustomerForm.css"

export interface CustomerFormProps {
    schema: FormSchema,
}

function CustomerForm({schema}: CustomerFormProps) {
    const fields = schema.fields.map(field => {
        let input;
        switch (field.type) {
            case "select":
            case "textarea":
            case "email":
            case "text":
                input = <input className="field-input" type={field.type} name={field.name}></input>
                break;
            default:
                input = <div>Unknown type</div>
        }
        return <div className="field">
            <div>{field.name}</div>
            {input}
        </div>;
    });

    return <div className="container flex-vertical">
        <h1>Customer Form</h1>
        {fields}
        <button className="affirm-button">Submit</button>
    </div>;
};

export default CustomerForm;