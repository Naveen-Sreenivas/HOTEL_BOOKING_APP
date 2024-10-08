
import { useFormContext } from 'react-hook-form'
import { HotelFormData } from './ManageHotelForm';

const DetailsSection = () => {
    const {register,formState:{errors}} = useFormContext<HotelFormData>();
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold mb-3'>Add Hotel</h1>
      <label 
        className="xl:w-1/2 text-gray-700 text-sm font-bold flex-1 "
        
      >
        Name
        <input
          className=" border border-gray-500 focus:outline-none focus:border-blue-800  rounded w-full py-1 px-2 font-normal"
          type="text"
          {...register("name", { required: "This field is required" })} />
          {
            errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
            )
          }
      </label>
      <div className='flex gap-4'>
      <label 
        className="xl:w-1/2 text-gray-700 text-sm font-bold flex-1 "
        
      >
       City
        <input
          className="border border-gray-500 focus:outline-none focus:border-blue-800  rounded w-full py-1 px-2 font-normal"
          type="text"
          {...register("city", { required: "This field is required" })} />
          {
            errors.city && (
                <span className="text-red-500">{errors.city.message}</span>
            )
          }
      </label>
      <label 
        className="xl:w-1/2 text-gray-700 text-sm font-bold flex-1 "
        
      >
       Country
        <input
       
          className="border border-gray-500 focus:outline-none focus:border-blue-800  rounded w-full py-1 px-2 font-normal"
          type="text"
          {...register("country", { required: "This field is required" })} />
          {
            errors.country && (
                <span className="text-red-500">{errors.country.message}</span>
            )
          }
      </label>
      </div>

<label 
        className="xl:w-1/2 text-gray-700 text-sm font-bold flex-1 "
        
      >
      Description
        <textarea
        rows={10}
          className="border border-gray-500 focus:outline-none focus:border-blue-800  rounded w-full py-1 px-2 font-normal"
          {...register("description", { required: "This field is required" })} />
          {
            errors.description && (
                <span className="text-red-500">{errors.description.message}</span>
            )
          }
      </label>
      <label 
        className="xl:w-1/2 text-gray-700 text-sm font-bold flex-1 "
        
      >
       Price Per Night
        <input
        min={1}
          className="border border-gray-500 focus:outline-none focus:border-blue-800  rounded w-full py-1 px-2 font-normal"
          type="number"
          {...register("pricePerNight", { required: "This field is required" })} />
          {
            errors.pricePerNight && (
                <span className="text-red-500">{errors.pricePerNight.message}</span>
            )
          }
      </label>
      <label 
        className="xl:w-1/2 text-gray-700 text-sm font-bold flex-1 "
        
      >
     Star Rating
        <select {...register("starRating",{required:"Rating is required"})}  className="border border-gray-500 focus:outline-none focus:border-blue-800  rounded w-full py-1 px-2 font-normal">

<option className='text-sm font-bold'>
    Select as Rating 
</option>
{[1,2,3,4,5].map((num)=>(<option value={num} key={num}>
{num}
</option>))}
        </select>
          {
            errors.starRating && (
                <span className="text-red-500">{errors.starRating.message}</span>
            )
          }
      </label>

    </div>
  )
}

export default DetailsSection