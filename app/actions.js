const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
import { useSearchParams } from "next/navigation";

export async function fetchCarsFromDataBase(){
    try{
        const url = `${SUPABASE_URL}/rest/v1/car`;
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_KEY,
        },
        });

        if (!response.ok){
            throw new Error("Can not get the car");
        }

        const data = await response.json();
            return data;
    } catch(error){
        console.log(error);
        return [];
    }

}

export function getSlug(option){
    const searchParams = useSearchParams();
    const search = searchParams.get(option);
    return search
}

export async function fetchCarBysearch(car){
    try{
        const url = `${SUPABASE_URL}/rest/v1/car`;
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_KEY,
        },
        });

        if (!response.ok){
            throw new Error("Can not get the car");
        }

        const data = await response.json();
        const foundCar = data.find(item => item.id === parseInt(car));
        return foundCar;
    } catch(error){
        console.log(error);
        return [];
    }
}