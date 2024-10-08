import { useForm } from "react-hook-form"
import  {useMutation, useQueryClient} from "react-query";
import * as apiClient from '../api-client'
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
    email:string;
    password:string;
}
const SigIn = () => {

//make this a separate component because we ues this in Register also
const location = useLocation();
const {showToast} = useAppContext();
const navigate = useNavigate();
const {register,formState:{errors},handleSubmit} = useForm<SignInFormData>();
const queryClient = useQueryClient();
const mutation = useMutation(apiClient.signIn,{
  onSuccess: async ()=>{
   showToast({message:"Sign in Successful",type:"SUCCESS"});
   await queryClient.invalidateQueries("validateToken");
    navigate(location.state?.from?.pathname || "/");
  },
  onError:(error:Error) => {
showToast({message:error.message,type:"ERROR"});  }
});

const onSubmit = handleSubmit((data)=>{
mutation.mutate(data)
})

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 ">
      <h2 className="text-3xl font-bold">Sign In</h2>
      <label 
        className="xl:w-1/2 text-gray-700 text-sm font-bold flex-1 "
        
      >
        Email
        <input
          className=" border border-gray-500 focus:outline-none focus:border-blue-800  rounded w-full py-1 px-2 font-normal"
          type="email"
          {...register("email", { required: "This field is required" })} />
          {
            errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
            )
          }
      </label>
      <label className="xl:w-1/2 text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          className="border border-gray-500  focus:outline-none focus:border-blue-800  rounded w-full py-1 px-2 font-normal"
          type="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {
            errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
            )
          }
      </label>
      <span className="flex items-center justify-between xl:w-1/2">
        <span  className="text-sm">
          Not Registered?{" "}<Link className="underline" to = "/register">Create an account here</Link>
        </span>
        <button type="submit" className="rounded-md px-5 bg-blue-600 text-white p-2 font-bold hover:bg-blue-700 text=xl">Login</button></span>

    </form>
  )
}

export default SigIn
