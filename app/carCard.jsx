
export function CarCard({car}){
    return(
            <div className="flex">
                <a className="flex items-center border-b pb-1 rounded border-gray-400 w-full flex-col">
                    <div className="car-img h-full w-[auto] rounded-t">
                        <img className="object-cover h-full max-w-full" src={car.img_url} alt="" />
                    </div>
                    <div className="flex flex-col p-4 mr-auto">
                        {car.brand.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')+ " " + car.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + " " + car.year}
                        <span className="text-gray-600 text-[14px]">Estrellas - N° de reviews</span>
                    </div>
                </a>
            </div>
    )
}