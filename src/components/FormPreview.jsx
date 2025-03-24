import React from "react";

const FormPreview = ({ formFields }) => {
  return (
    <div className="preview-area">
      {formFields.map((field, index) => (
        <div key={index} className="form-field">
          <label>{field.label}</label>
          {field.type === "text" && <input type="text" placeholder="Enter text" />}
          {field.type === "textarea" && <textarea placeholder="Enter text"></textarea>}
          {field.type === "select" && (
            <select>
              <option value="">Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          )}
          {field.type === "checkbox" && <input type="checkbox" />}
          {field.type === "radio" && <input type="radio" />}
          {field.type === "date" && <input type="date" />}
          {field.type === "file" && <input type="file" />}
          {field.type === "range" && <input type="range" min="0" max="100" />}
          {field.type === "toggle" && (
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          )}
          {field.type === "multiselect" && (
            <select multiple>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          )}
          {field.type === "richtext" && (
            <textarea className="rich-text" placeholder="Enter rich text..."></textarea>
          )}
        </div>
      ))}
    </div>
  );
};

export default FormPreview;