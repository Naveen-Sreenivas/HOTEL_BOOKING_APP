import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm";


const GuestSection = () => {
    const {register,formState:{errors}} = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Guest</h2>
      <div className="grid grid-cols-2 p-6 gap-5 rounded-md bg-gray-300">
      <label className="text-gray-700 text-sm font-semibold">
Adults
<input type="number" min={1} className="mx-1 border focus:outline-none focus:border-blue-800 rounded-md w-1/2 py-2 px-3 font-normal" {...register("adultCount",{
    required:"This field is required"
})
}/>
{
    errors.adultCount?.message && (
        <p className="text-red-500 text-sm font-bold ml-12">{errors.adultCount.message}</p>
    )
}
</label>
      <label className="text-gray-700 text-sm font-semibold">
Children
<input type="number" min={0} className="mx-1 border focus:outline-none focus:border-blue-800 rounded-md w-1/2 py-2 px-3 font-normal" {...register("childCount",{
    required:"This field is required"
})
}/>

{
    errors.childCount?.message && (
        <p className="text-red-500 text-sm font-bold ml-15 "> 
       {errors.childCount.message}</p>
    )
}

</label>
     </div>
    </div>
  )
}

export default GuestSection
