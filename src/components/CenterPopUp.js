export default function CenterPopUp({onClick, children}){
    return (
        <>
        <div className="fixed inset-0 bg-[rgba(96,165,250,.6)] z-10" onClick={onClick}>

        </div>
        <div className="fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {children}
        </div>
        </>
    )
}