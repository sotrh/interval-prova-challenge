export interface FormField {
  name: string;
  type: string;
}

export interface FormSchema {
  fields: FormField[];
}

export interface FieldData {
  name: string;
  data: string;
}

export interface FormSubmission {
  fields: FieldData[];
}
