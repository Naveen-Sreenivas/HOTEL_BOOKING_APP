import DatePicker from "react-datepicker";
import{useForm} from "react-hook-form";
import { useSearchContext } from "../../contexts/SearchContext";
import { useAppContext } from "../../contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

type Props ={
    hotelId:string;
    pricePerNight:number;
}

type GuestInformData = {

checkIn:Date;
checkOut:Date;
adultCount:number;
childCount:number;

}




const GuestInfoForm = ({hotelId,pricePerNight}:Props) => {
  const  search = useSearchContext();
  const {isLoggedIn} = useAppContext();
  const navigate = useNavigate();
const location = useLocation();
  const {watch,register,handleSubmit,setValue,formState:{errors},} = useForm<GuestInformData>({defaultValues:{
    
    checkIn:search.checkIn,
    checkOut:search.checkOut,
    adultCount:search.adultCount,
    childCount:search.childCount,
    
      }});

      const onSingInClick = (data:GuestInformData)=>{
        search.saveSearchValues("",data.checkIn,data.checkOut,data.adultCount,data.childCount)

          navigate("/sign-in",{state:{from:location}})

      }

      const onSubmit = (data:GuestInformData)=>{
        search.saveSearchValues("",data.checkIn,data.checkOut,data.adultCount,data.childCount)

          navigate(`/hotel/${hotelId}/booking`)

      }

const checkIn = watch("checkIn");
const checkOut = watch("checkOut");
const minDate = new Date();
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear()+1);
    return (

    <div className="flex flex-col rounded-md p-4 bg-blue-200 gap-4">
      <h3 className="text-md font-bold">${pricePerNight}</h3>
      <form onSubmit={isLoggedIn ? handleSubmit(onSubmit) : handleSubmit(onSingInClick)}>
        <div className="grid grid-cols-1 gap-4 items-center">
          <div>
             <DatePicker selected={checkIn} 
             required
    onChange={(date)=>setValue("checkIn",date as Date)}
    selectsStart
     startDate={checkIn}
     endDate={checkOut}
     minDate={minDate}
     maxDate={maxDate}
     placeholderText="Check-in Date"
     className="rounded-md min-w-full bg-white p-2 focus:outline-none"   wrapperClassName="min-w-full"/>
     </div>
          <div>
             <DatePicker selected={checkOut} 
             required
    onChange={(date)=>setValue("checkOut",date as Date)}
    selectsStart
     startDate={checkIn}
     endDate={checkOut} 
     minDate={minDate}
     maxDate={maxDate}
     placeholderText="Check-out Date"
     className="rounded-md min-w-full bg-white p-2 focus:outline-none"   wrapperClassName="min-w-full"/>
     </div>
     <div className="flex bg-white px-2 py-1 justify-evenly rounded-md">
<label className="items-center flex">
    Adults:
    <input className="w-full p-1 focus:outLine font-bold " type="number"
    placeholder="1"
    required
    min={1} 
    max={20}
   {...register("adultCount",{required:"This field is required",min:{
    value:1,
    message:"There must be at least one adult",
   },
   valueAsNumber:true,
  })}
    />
</label>
<label className="items-center flex">
    Children:
    <input className=" w-full p-1 focus:outLine font-bold " type="number"
    placeholder="0"
    required
    min={0}
    max={20}
{...register("childCount",{
  valueAsNumber:true,
})}
    />
</label>
{errors.adultCount &&(

<span className="text-red-500 font-semibold text-sm"></span>

)}
</div>

{
  isLoggedIn ? (
    <button className="bg-blue-600 text-white h-full p-2 font-bold text-xl hover:bg-blue-500">Book Now</button>
  ) : <button className="bg-blue-600 text-white h-full p-2 font-bold text-xl hover:bg-blue-500">Sign in to Book</button>
}

        </div>
      </form>
    </div>
  )
};

export default GuestInfoForm
