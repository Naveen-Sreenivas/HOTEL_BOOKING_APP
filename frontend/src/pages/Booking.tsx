import { useQuery } from "react-query"
import * as apiClient from "../api-client"
import BookingForm from "../forms/BookingForm/BookingForm";
import { useEffect, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { useParams } from "react-router-dom";
import BookingDetailSummary from "../components/BookingDetailSummary";
import { useAppContext } from "../contexts/AppContext";
import { Elements } from "@stripe/react-stripe-js";
const Booking = () => {
    const {stripePromise} = useAppContext();
    const [numberOfNights,setNumberOfNights] = useState<number>(0);
const search = useSearchContext();
const {hotelId} = useParams();

useEffect(()=>{
    if(search.checkIn && search.checkOut){
     const nights = Math.abs(search.checkOut.getTime() - search.checkIn.getTime())/(1000*60*60*24);
 
     setNumberOfNights(Math.ceil(nights))
    }
 },[search.checkIn,search.checkOut]);

 const {data:paymentIntentData} = useQuery("createPaymentIntent",()=>apiClient.createPaymentIntent(hotelId as string,numberOfNights.toString()),{
    enabled: !!hotelId && numberOfNights > 0,
 });

const {data:hotel} = useQuery("fetchHotelByID",()=> apiClient.fetchHotelById(hotelId as string),{
    enabled: !!hotelId,
})
    const {data:currentUser} = useQuery("fetchCurrentUser",apiClient.fetchCurrentUser);
    console.log(currentUser?.email);

    if(!hotel){
        return<></>
    }

  return (
    <div className="grid md:grid-cols-[1fr_2fr]">
        <BookingDetailSummary checkIn={search.checkIn} checkOut={search.checkOut} childCount={search.childCount} adultCount={search.adultCount} 
        numberOfNights = {numberOfNights}
        hotel={hotel}
        />
   {
   currentUser && paymentIntentData && 
    (
        <Elements stripe={stripePromise} options={{
            clientSecret:paymentIntentData.clientSecret,
        }}>
    <BookingForm currentUser = {currentUser} paymentIntent ={paymentIntentData}/>
    </Elements>
)
    }
    </div>   
  );
}

export default Booking;
