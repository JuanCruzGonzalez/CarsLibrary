export function AppStatics({num, text}){
    return(
        <div className="cars-count flex flex-col cars-count">
          <span className="font-medium text-6xl pb-3">{num}</span>
          <hr className="w-100 bg-black h-px"/>
          <span className="w-60 pt-2">{text}</span>
        </div>
    )
}