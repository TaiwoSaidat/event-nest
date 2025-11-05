const FormCheckbox = ({
  label,
  checked,
  onChange,
  required = false,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
}) => {
  return (
    <div className="mb-4 flex items-start">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required={required}
        className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label className="ml-3 text-sm text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};
export default FormCheckbox;