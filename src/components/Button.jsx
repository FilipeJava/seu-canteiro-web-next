import Link from "next/link"



export default function Button({ children, icon, variant = "primary", element = "link", ...props }) {


    const estilo = {

        primary: "bg-lime-400 text-black py-1 px-4 rounded hover:bg-lime-600",
        secondary: "border-2  border-lime-200 py-1 px-4 rounded hover:bg-lime-600"
    }

    const variantClass = estilo[variant]


    return (

        <>
            {element === "link" ?

                <Link href="#" {...props} className={variantClass}>
                    {icon}
                    {children}</Link>

                :

                <div className={variantClass}>
                    {icon}
                        <input type="submit" value={children}  />
                </div>
                

            }


        </>


    )
}
