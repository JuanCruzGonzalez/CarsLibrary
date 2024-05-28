import { PageTitle } from "../components/pageTitle";

export default function Contact(){
    return(
        <main className="contact text-center flex justify-center items-center min-h-[94vh]">
            <section className="contact-form p-6 rounded h-fit">
                <PageTitle>Contact us</PageTitle>
                <div className="w-full flex justify-center">
                    <form action="" className="form rounded-xl p-5">
                        <div className="contact-inputs flex gap-3">    
                            <input required="" className="input" type="text" name="name" id="name" placeholder="Name"/>
                            <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail"/>
                        </div>
                        <textarea required="" className="input resize-none" name="massage" id="massage" cols="30" rows="3" placeholder="Massage"></textarea>
                        <input className="mb-0 mt-5 text-white bg-red-600 w-full rounded-lg p-2" type="submit" value="Send"/>
                    </form>
                </div> 
            </section>
        </main>
    )
}