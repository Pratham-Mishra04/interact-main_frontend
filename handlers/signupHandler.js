import postHandler from "../reqHandlers/postHandler.js"
import Toaster from "../utils/toaster.js";

const signupHandler = async(formData) =>{
    const URL = `${process.env.SERVER_URL}/users/signup`;
    const res= await postHandler(URL, formData);
    if(res.status==1) Toaster("success", "Account Created")
    else Toaster("error", res.data.message)
}

export default signupHandler