import React from "react";

type BaseProps = {
  id: string;
  label: string;
  required?: boolean;
  errors?: string;
};

type InputWithLabelProps = BaseProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const InputWithLabel: React.FC<InputWithLabelProps> = (props) => {
  const { label, required = false, className = "", errors, ...rest } = props;

  return (
    <div className="w-full">
      <label className="input-label" htmlFor={props.id}>
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      <div>
        <input
          {...rest}
          id={props.id}
          type="text"
          className={`input-text ${className ?? ""}`}
          onWheel={(e) => e.currentTarget.blur()}
        />
      </div>
      {errors ? (
        <p aria-live="polite" className="text-sm text-red-400">
          {errors}
        </p>
      ) : null}
    </div>
  );
};

export default InputWithLabel;
