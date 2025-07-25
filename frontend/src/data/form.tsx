export interface FormField {
  name: string;
  type: string;
}

export interface FormSchema {
  fields: FormField[];
}

export interface FormSubmission {}
