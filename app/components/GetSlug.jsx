import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export function GetSlug({title, searchSlug}){
    const searchParams = useSearchParams();
    const search = searchParams.get(searchSlug);

    return(
        <>
            <Suspense>
                <h3 className="text-2xl mb-10">{title}: {search}</h3>
            </Suspense>
        </> 
    )
}