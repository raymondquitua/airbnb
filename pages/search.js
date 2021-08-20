import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResult }) {

    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), "MMM dd ");
    const formattedEndDate = format(new Date(endDate), "dd");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests` } />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays · {range} · {noOfGuests} guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in { location }</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>                      
                    </div>

                    <div className="flex flex-col">
                    {searchResult.map(({ img, location, title, description, star, price, total } ) => (
                        <InfoCard 
                            key={img}
                            img={img}
                            location={location}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                            title={title}
                        />
                    ))}
                    </div>
                </section>

{/* MAP SECTION */}
                    <section className="hidden xl:inline-flex xl:min-w-[400px]" >
                        <Map />
                    </section>

            </main>

            <Footer />
        </div>
    )   
}

export default Search;

export async function getServerSideProps() {
    const searchResult = await fetch("https://jsonkeeper.com/b/5NPS")
    .then(res => res.json()
    );
    return {
        props: {
            searchResult,
        },
    };

}