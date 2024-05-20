export function CarCard({ car }) {
    // Función para generar estrellas   
    const renderStars = (numStars) => {
        const stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push(<span key={i}>&#9733;</span>);
        }
        return stars;
    };

    return (
        <div className="flex">
            <a href={`/car?slug=${car.id}`} className="flex items-center border-b pb-1 rounded border-gray-400 w-full flex-col">
                <div className="car-img h-full w-[auto] rounded-t">
                    <img className="object-cover h-full max-w-full" src={car.img_url} alt="carImg"/>
                </div>
                <div className="flex flex-col p-4 mr-auto">
                    {car.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + " " + car.year}
                    <span className="text-gray-600 text-[14px]">
                        Estrellas {renderStars(car.stars)}
                        {car.price}
                    </span>
                </div>
            </a>
        </div>
    );
}
