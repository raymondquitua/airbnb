import Image from "next/image";
import { 
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,    
    UsersIcon,
} from '@heroicons/react/solid';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";




function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    
    const resetInput = () => {
        setSearchInput('');
    };

    const router = useRouter(); 
    
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
            
        });
        return setSearchInput('')
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left div of header */}
                <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                    <Image 
                        src="https://links.papareact.com/qd3"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                    />
                </div>
            {/* Middle - Search div */}
                <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
                    <input 
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text" 
                        placeholder={placeholder || "Start your search"}
                        className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 
                        placeholder-gray-400"
                    />
 
                    <SearchIcon 
                        className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer
                            md:mx-2"
                    />
                </div>


            {/* Right div of header */}
                <div className="flex space-x-4 items-center justify-end
                    text-gray-500"
                >
                    <p className="hidden md:inline md:ml-2">Become a host</p>

                    <GlobeAltIcon className="h-6 cursor-pointer" />
                    
                        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                            <MenuIcon className="h-6 cursor-pointer" />
                            <UserCircleIcon className="h-6 cursor-pointer" />
                        </div>
                </div>
            
        {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto justify-center bg-red-500 sm:w-auto">

                    {/* // p-2 mt-2 bg-gray-500
                    // rounded-b-lg rounded-t-sm shadow-xl lg:w-auto " */}
{/* DATE_RANGE_PICKER */}
                    
                    <DateRangePicker className="border-b mt-2 sm:justify-center"
                        color={"#3d91ff"}
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                        
                    />
                   
{/* NoOfGuests */}
                    <div className="flex items-center border-b mb-5">
                        <h2 className="text-2xl p-2 flex-grow font-semibold">Number of Guest</h2>
                        <UsersIcon className="h-5 mr-1" />
                        <input 
                            value={noOfGuests}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-400"
                            type="number" 
                        />
                    </div>
{/* CANCEL BUTTON */}
                    <div className="flex mb-5">
                        <button 
                            onClick={resetInput}
                            className="flex-grow text-gray-500">
                                Cancel
                        </button>
{/* SEARCH BUTTON */}
                        <button 
                            onClick={search}
                            className="flex-grow text-red-400 items-center">
                            Search
                        </button>
                    </div>

            </div>
        )}

        </header>
    )
}

export default Header;
