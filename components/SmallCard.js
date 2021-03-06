import Image from "next/image";

function SmallCard({ img, distance, location }) {
    return (
        <div className="flex items-center p-2 m-2 space-x-4 rounded-xl cursor-pointer
            hover:bg-gray-100 hover:scale-105 shadow-md transition transform duration-200 ease-out"
        >
            {/* div for the image */}
            <div className="relative h-20 w-20">
                <Image 
                    className="rounded-lg"
                    src={img}
                    layout="fill"
                />
            </div>

            {/* div for the  */}
            <div>
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard;
