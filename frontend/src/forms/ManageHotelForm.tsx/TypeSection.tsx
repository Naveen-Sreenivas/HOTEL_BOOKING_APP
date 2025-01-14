import { useFormContext } from "react-hook-form"
import { hotelTypes } from "../../config/hotel-options-config"
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
    const {register,watch,formState:{errors}} = useFormContext<HotelFormData>();
    const typeWatch = watch("type");
  return (
    <div>
      <h2 className='text-2xl font-bold mb-3'>Type</h2>
      <div className="grid gap-2 grid-cols-3 sm:grid-cols-4  lg:grid-cols-5">
{
    hotelTypes.map((type,index)=>(
        <label key={index} className={ typeWatch === type ? "cursor-pointer bg-blue-300 text-sm rounded-full px-4 py-2 font-semibold flex justify-center text-center items-center" : "cursor-pointer bg-gray-300 text-sm rounded-full px-4 py-2 font-semibold flex justify-center text-center items-center"}>
            <input className="hidden"  type="radio" value={type} {...register("type",{required:"This field is required"})}/>
            <span>{type}</span>
        </label>
    ))
}
      </div>
      {
        errors.type && 
       ( <span className="text-red-500 text-sm font-bold">
{errors.type.message}
        </span>)
      }
    </div>
  )
}

export default TypeSection
