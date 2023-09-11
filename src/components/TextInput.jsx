export default function TextInput({label,id, ...props}){
    return(
        <div className="flex flex-col gap-1 my-2">
            <label className="text-black-100 font-semibold" htmlFor={id}>{label}</label>
            <input  className="bg-lime-200 p-2 rounded outline-none focus:ring-lime-600 focus:ring-1 text-black w-96 h-8" type="text" {...props} id={id}/>
        </div>
        
    )
}