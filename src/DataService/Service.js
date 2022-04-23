import axios from "axios";

export const checkUserValidtion = async  (UserData  ) => {
 
    let result =-100
       await axios.post ("http://127.0.0.1:8000/accounts/register/",UserData,{
            headers: {
                "Content-Type": "multipart/form-data" ,
            }
          })
            .then ( response => {
                console.log ( response.data ) 
                let string1 = "an OTP has been sent on your email";
         result = string1.localeCompare(response.data.message);
            }).catch ( err => {
                    console.log ( err )
                    alert("already registered user ..Refresh the page and try again")
                } )
        return result;
    }


    export const verifyOtp =  async (obj) => 
    {
        let result =-100
        await axios.post ("http://127.0.0.1:8000/accounts/verify/",obj,{
            headers: {
                "Content-Type": "multipart/form-data" ,
            }
          })
        .then ( response => {
             let string1 = "Your OTP is verified.";
             result = string1.localeCompare(response.data.message);
             console.log("result " , result )
            //  if(result==0)return 0;
             alert("otp has been verified..Now you can Login")
            console.log ( response.data ) }).catch ( err => {
                console.log ( err )
                alert("otp entered is wrong")
            } )
    
            return result;
    }

    export const LoginUser = async (obj) => 
    {
        let res=""
        await axios.post ("http://127.0.0.1:8000/accounts/login/",obj,{
            headers: {
                "Content-Type": "multipart/form-data" ,
            }
          })
        .then ( response => {
            console.log ( response.data.token )
            res=response.data.token         
        }).catch ( err => {
                console.log ( err )
                alert("Login Failed .  Try Again")
            } )
    
            return res;
    }

    export const LogOutUser = async (obj) => 
    {
        let res=""
        await axios.post ("http://127.0.0.1:8000/accounts/login/",obj,{
            headers: {
                "Content-Type": "multipart/form-data" ,
            }
          })
        .then ( response => {
            console.log ( response.data.token )
            res=response.data.token         
        }).catch ( err => {
                console.log ( err )
                alert("Login Failed .  Try Again")
            } )
    
            return res;
    }

    
    export const LungCancer = async (obj,token) => 
    {
        console.log(token)
        let result = 0;
        const tokenString = localStorage.getItem('token');
        await axios.post ("http://127.0.0.1:8000/api/predictLungCancer/",obj ,{
        headers: {
            "Authorization":`Token ${token}`,
            "Content-Type": "multipart/form-data" ,
        }
      })
        .then ( response => {
           
            result=response.data 
            console.log (result )
        }).catch ( err => {
                alert("token not valid... Login Again")
                console.log ( err )
            } )
    
            return result;
    }
    export const HeartCancer =async  (obj,token) => 
    {
            let result = 0;
            // const tokenString = localStorage.getItem('token');
            console.log(token)
            await axios.post ("http://127.0.0.1:8000/api/predictHeartAttack/",obj ,{
            headers: {
                "Authorization":`Token ${token}`,
                "Content-Type": "multipart/form-data" ,
            }
          })
            .then ( response => {
               
                result=response.data 
                console.log (result )
            }).catch ( err => {
                    alert("token not valid... Login Again")
                    console.log ( err )
                } )

                return result;
    }

    export const DiabetesCancer = async  (obj,token) => 
    {
            let result = 0;
            const tokenString = localStorage.getItem('token');
            await axios.post ("http://127.0.0.1:8000/api/predictDiabetes/",obj ,{
            headers: {
                "Authorization":`Token ${token}`,
                "Content-Type": "multipart/form-data" ,
            }
          })
            .then ( response => {
               
                result=response.data 
                console.log (result )
            }).catch ( err => {
                    alert("token not valid... Login Again")
                    console.log ( err )
                } )

                return result;
    }

    export const BrainTumour =   (obj,token) => 
    {
        let result =-100
        axios.post ("http://127.0.0.1:8000/api/predictBrainTumor/",obj ,{
        headers: {
            "Authorization":`Token ${token}`,
        }
      })
        .then ( response => {
            console.log ( response.data ) }).catch ( err => {
                console.log ( err )
            } )
    
            return result;
    }
    
    