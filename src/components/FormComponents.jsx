import React from "react";

const FormComponents = ({ onDragStart }) => {
  const components = [
    { type: "text", label: "Text Input" },
    { type: "textarea", label: "Text Area" },
    { type: "select", label: "Dropdown" },
    { type: "checkbox", label: "Checkbox" },
    { type: "radio", label: "Radio Button" },
    { type: "date", label: "Date Picker" },
    { type: "file", label: "File Upload" },
    { type: "range", label: "Range Slider" },
    { type: "toggle", label: "Toggle Switch" },
    { type: "multiselect", label: "Multi-select Dropdown" },
    { type: "richtext", label: "Rich Text Editor" },
  ];

  return (
    <div className="components-list">
      {components.map((component, index) => (
        <div
          key={index}
          className="component"
          draggable
          onDragStart={() => onDragStart(component)}
        >
          {component.label}
        </div>
      ))}
    </div>
  );
};

export default FormComponents;