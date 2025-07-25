import { useMemo } from "react";
import { FormSubmission } from "../data/form";

export interface FormSubmissionListProps {
  submissions: FormSubmission[];
}

function FormSubmissionList({ submissions }: FormSubmissionListProps) {
  const submissionUI = useMemo(
    () =>
      submissions.map((submission) => (
        <div className="field">
          <div>Name</div>
          <div>{submission.name}</div>
          <div>Response</div>
          <div>{submission.data}</div>
        </div>
      )),
    [submissions]
  );
  return <div className="container">{submissionUI}</div>;
}

export default FormSubmissionList;
