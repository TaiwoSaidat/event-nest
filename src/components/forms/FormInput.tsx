const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  icon,
  min,
  max,
}: {
  label: string;
  type?: string;
  value: string | number;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
  min?: string | number;
  max?: string | number;
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          min={min}
          max={max}
          className={`w-full ${
            icon ? "pl-10" : "pl-4"
          } pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900`}
        />
      </div>
    </div>
  );
};

export default FormInput;
