import { useMemo } from "react";
import { FormSubmission } from "../data/form";
import './FormSubmissionList.css';

export interface FormSubmissionListProps {
  submissions: FormSubmission[];
}

function FormSubmissionList({ submissions }: FormSubmissionListProps) {
  const submissionUI = useMemo(
    () =>
      submissions.map((submission) => (
        <div className="submission">
          {submission.fields.map((field) => (
            <div className="submission-field">
              <div className="submission-name">{field.name}</div>
              <div className="submission-data">{field.data}</div>
            </div>
          ))}
        </div>
      )),
    [submissions]
  );
  return <div className="container">{submissionUI}</div>;
}

export default FormSubmissionList;
