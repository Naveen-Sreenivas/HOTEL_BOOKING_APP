import { useFormContext } from "react-hook-form"
import { hotelFacilities } from "../../config/hotel-options-config"
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {

  const {register,formState:{errors}} = useFormContext<HotelFormData>();

  return (

    <div>
      <h2 className="text-2xl font-bold mb-3">Facilities</h2>
      <div className="grid grid-cols-5 gap-5 justify-items-start">
        {
            hotelFacilities.map((facility,index)=>(
<label key={index} className="text-sm text-gray-700  text-center">

<input type="checkbox" value={facility} {...register("facilities",{

validate:(facilities)=>{
  if(facilities && facilities.length > 0){
    return true;
  }else{
    return "At least one facility is required";
  }
}

})}/>
<span className="mx-1">{facility}</span>

</label>
            ))
        }
      </div>
      {
        errors.facilities && (
          <span className="text-red-500 font-bold">{errors.facilities.message}</span>
        )
      }
    </div>
  )
}

export default FacilitiesSection
