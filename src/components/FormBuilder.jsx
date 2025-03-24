import React, { useState } from "react";
import FormComponents from "./FormComponents";
import FormPreview from "./FormPreview";
import "../FormBuilder.css";

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);

  const handleDrop = (component) => {
    setFormFields([...formFields, component]);
  };

  return (
    <div className="form-builder">
      <div className="components-panel">
        <h2>Form Components</h2>
        <FormComponents onDragStart={handleDrop} />
      </div>
      <div className="form-preview">
        <h2>Form Preview</h2>
        <FormPreview formFields={formFields} />
      </div>
    </div>
  );
};

export default FormBuilder;