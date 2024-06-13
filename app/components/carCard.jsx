export function CarCard({ car }) {

    return (
        <div className="flex">
            <a href={`/car?slug=${car.id}`} className="flex items-center border-b pb-1 rounded border-gray-400 w-full flex-col">
                <div className="car-img h-full w-[auto] rounded-t">
                    <img className="object-cover h-full max-w-full" src={car.img_url} alt="carImg"/>
                </div>
                <div className="flex flex-col p-4 w-full">
                    {car.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + " " + car.year}
                    <span className="flex text-gray-600 text-[14px]">
                        <span className="w-full text-md">                            
                            Kilometers: {car.kilometers}
                        </span>
                        <span className="car-price flex justify-end w-full text-md">
                            ${car.price}
                        </span>
                    </span>
                </div>
            </a>
        </div>
    );
}
