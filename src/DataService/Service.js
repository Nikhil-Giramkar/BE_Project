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
            }).catch ( err =>
                {
                    console.log (err)
                    alert("already registered user ..Refresh the page and try again")
                })
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
        let res={}
        await axios.post ("http://127.0.0.1:8000/accounts/login/",obj,{
            headers: {
                "Content-Type": "multipart/form-data" ,
            }
          })
        .then ( response => {
            console.log ( response.data.token )
            res=response.data         
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

    export const getHistory = async (token) => 
    {
        console.log(token)
        let result = 0;
        const tokenString = localStorage.getItem('token');
        await axios.get ("http://127.0.0.1:8000/api/userHistory/",{
        headers: {
            "Authorization":`Token ${token}`
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

    export const BrainTumour =  async(obj,token) => 
    {
        let result =0
        await axios.post ("http://127.0.0.1:8000/api/predictBrainTumor/",obj ,{
        headers: {
            "Authorization":`Token ${token}`,
            "Content-Type": "multipart/form-data" ,
        }
      })
        .then ( response => {
            result=response.data 
            console.log ( response.data ) }).catch ( err => {
                console.log ( err )
            } )
    
            return result;
    }
    

    //LungTable

    // export const getLungTable = async (token) => 
    // {
    //     console.log(token)
    //     let result = {}
    //     const tokenString = localStorage.getItem('token');
    //     await axios.get ("http://127.0.0.1:8000/api/lungcancer/sexVsResult/",{
    //     headers: {
    //         "Authorization":`Token ${token}`
    //     }
    //   })
    //     .then ( response => {
    //         result["GenderVsResult "]=response.data 
    //         console.log (result )
    //     }).catch ( err => {
    //             alert("token not valid... Login Again")
    //             console.log ( err )
    //         } )
    
    //         return result;
    // }


    export const getLungTable = async (token) => 
    {
        console.log(token)
        let result = []
        const tokenString = localStorage.getItem('token');


        const requestOne =await axios.get("http://127.0.0.1:8000/api/lungcancer/sexVsResult/",{
            headers: {
                "Authorization":`Token ${token}`
            }
          });
        const requestTwo = await axios.get("http://127.0.0.1:8000/api/lungcancer/smokingVsResult/",{
            headers: {
                "Authorization":`Token ${token}`
            }
          });

          axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
           const responseOne = responses[0].data
           const responseTwo = responses[1].data
            result.push(responseOne)
            result.push(responseTwo)
            
            // for (const item in responseOne) {
            //     console.log(item + " " + responseOne[item])
            //   }
          })).catch(err => {
            alert("token not valid... Login Again")
            console.log ( err )
          })
      console.log(result)
         return result ;
    }




    export const getHeartTable = async (token) => 
    {
        console.log(token)
        let result = []
        const tokenString = localStorage.getItem('token');


        const requestOne =await axios.get("http://127.0.0.1:8000/api/heartattack/sexVsResult/",{
            headers: {
                "Authorization":`Token ${token}`
            }
          });
        const requestTwo = await axios.get("http://127.0.0.1:8000/api/heartattack/chestPainVsResult/",{
            headers: {
                "Authorization":`Token ${token}`
            }
          });

          axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
           const responseOne = responses[0].data
           const responseTwo = responses[1].data
            result.push(responseOne)
            result.push(responseTwo)
            
            // for (const item in responseOne) {
            //     console.log(item + " " + responseOne[item])
            //   }
          })).catch(err => {
            alert("token not valid... Login Again")
            console.log ( err )
          })
      console.log(result)
         return result ;
    }


    export const getDiabetesTable = async (token) => 
    {
        console.log(token)
        let result = []
        const tokenString = localStorage.getItem('token');


        const requestOne =await axios.get("http://127.0.0.1:8000/api/diabetes/sexVsResult/",{
            headers: {
                "Authorization":`Token ${token}`
            }
          });
        const requestTwo = await axios.get("http://127.0.0.1:8000/api/diabetes/obesityVsResult/",{
            headers: {
                "Authorization":`Token ${token}`
            }
          });

          axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
           const responseOne = responses[0].data
           const responseTwo = responses[1].data
            result.push(responseOne)
            result.push(responseTwo)
            
            // for (const item in responseOne) {
            //     console.log(item + " " + responseOne[item])
            //   }
          })).catch(err => {
            alert("token not valid... Login Again")
            console.log ( err )
          })
      console.log(result)
         return result ;
    }
    


    export const getBrainTable = async (token) => 
    {
        console.log(token)
        let result = []
        const tokenString = localStorage.getItem('token');


        const requestOne =await axios.get("http://127.0.0.1:8000/api/braintumor/sexVsResult/",{
            headers: {
                "Authorization":`Token ${token}`
            }
          });
        const requestTwo = await axios.get("http://127.0.0.1:8000/api/braintumor/TypeResult/",{
            headers: {
                "Authorization":`Token ${token}`
            }
          });

          axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
           const responseOne = responses[0].data
           const responseTwo = responses[1].data
            result.push(responseOne)
            result.push(responseTwo)
            
            // for (const item in responseOne) {
            //     console.log(item + " " + responseOne[item])
            //   }
          })).catch(err => {
            alert("token not valid... Login Again")
            console.log ( err )
          })
      console.log(result)
         return result ;
    }
    
    