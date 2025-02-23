import { useQuery } from "react-query";
import {Link} from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";


const MyHotels=() =>{

    const { data:hotelData } = useQuery("fetchMyHotel",apiClient.fetchMyHotels,{
        onError:()=>{

        }
    })

if(!hotelData){
    return <span>No Hotels found</span>
}
if(!hotelData){
    return <span>No Hotels found</span>;
}
  
   return( <div className="space-y-5">
    <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link to="/add-hotel" className="rounded-md flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-700">Add Hotel</Link>
    </span>
    <div className="grid grid-cols-1 gap-8">
{
hotelData.map((hotel,index)=>(

<div key={index} className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5">

<h2 className="text-2xl font-bold">{hotel.name}</h2>
<div className="whitespace-pre-line">{hotel.description}</div>
<div className="grid grid-cols-2 sm:grid-cols-5   gap-2">
    <div className="border border-slate-300 rounded-sm p-3 flex items-center text-center">
        <BsMap className="mr-1"/>
        {hotel.city},{hotel.country}
    </div>
    <div className="border border-slate-300 rounded-sm p-3 flex items-center text-center">
        <BsBuilding className="mr-1"/>
        {hotel.type}
    </div>
    <div className="border border-slate-300 rounded-sm p-3 flex items-center text-center">
        <BiMoney className="mr-1"/>
        ${hotel.pricePerNight} per night
    </div>
    <div className="border border-slate-300 rounded-sm p-3 flex items-center text-center">
        <BiHotel className="mr-1"/>
        {hotel.adultCount},
        {hotel.childCount}
    </div>
    <div className="border border-slate-300 rounded-sm p-3 flex items-center text-center">
        <BiStar className="mr-1"/>
        {hotel.starRating} Star Rating
        
    </div>
</div>
<span className="flex justify-end">
<Link className="rounded-md flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-700" to={`/edit-hotel/${hotel._id}`}>View Details</Link>

</span>
</div>

))
}
    </div>
</div>)
}
export default MyHotels;