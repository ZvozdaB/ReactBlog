export default function Input({
  label,
  id,
  type = "text",
  register,
  error,
  placeholder,
  className,
}) {
  let inputCls =
    "border py-1 px-2 focus:outline-none focus:border-sky-500 focus:rounded hover:shadow ";
  inputCls += error ? " border-red-400 " : "";
  return (
    <div className={"flex flex-col mb-4 " + className}>
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        placeholder={placeholder}
        className={inputCls}
      />
      {error && <p className="text-red-400">{error.message}</p>}
    </div>
  );
}
