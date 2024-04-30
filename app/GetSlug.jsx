import { useSearchParams } from "next/navigation";

export function GetSlug({title}){
    const searchParams = useSearchParams();
    const search = searchParams.get('car');

    return(
        <>
            <h3 className="text-2xl mb-10">{title}: {search}</h3>
        </>
    )
}