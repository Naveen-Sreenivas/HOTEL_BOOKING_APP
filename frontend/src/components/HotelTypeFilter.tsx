import { hotelTypes } from "../config/hotel-options-config";

type Props = {
  selectedHotelTypes: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => 
    void;
  
};
const HotelTypeFilter = ({selectedHotelTypes,onChange}:Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold md-2">Hotel Types</h4>
      {hotelTypes.map((hotelType,index)=>(
<label key={index} className="flex items-center space-x-2">
<input type="checkbox" className="rounded" value={hotelType} checked={selectedHotelTypes.includes(hotelType)}
onChange={onChange}
/>
<span>{hotelType}</span> 
</label>
      ))}
    </div>
  )
}

export default HotelTypeFilter
