export default function Input({label,id,type = "text",register, error, placeholder}){

    let inputCls = error ? "border py-1 px-2 border-red-400" : "border py-1 px-2"
    return (
        <div className="flex flex-col mb-4">
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
    )
}