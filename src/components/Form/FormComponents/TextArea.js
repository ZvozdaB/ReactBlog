import TextareaAutosize from "react-textarea-autosize";
export default function TextArea({
  id,
  type = "text",
  register,
  error,
  placeholder,
  className,
  minRows,
}) {
  let inputCls =
    "border py-1 px-2 overflow-hidden resize-none focus:outline-none focus:border-sky-500 focus:rounded hover:shadow ";
  inputCls += error ? "border-red-400 " : " ";

  return (
    <div className={"flex flex-col mb-4 " + className}>
      <TextareaAutosize
        id={id}
        type={type}
        {...register}
        placeholder={placeholder}
        className={inputCls}
        minRows={minRows}
      />
      {error && <p className="text-red-400">{error.message}</p>}
    </div>
  );
}
