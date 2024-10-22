import React from 'react';
function Index() {


    return (



        <div className="container mt-20 flex mx-auto item-center justify-center  ">
            <div className="left w-2/4 mx-20 ">
                <img className=" w-80 "

                    src="/fb.svg"

                    alt="Facebook logo"
                />
                <p className="text-2xl  mx-2 p-0 m-0 flex justify-start  block">
                    Connect with friends and the world  
                    

                </p>
                <p className="text-2xl  mx-2 p-0 m-0 flex justify-start mt-0 pt-0   block">
                      around you on Facebook.


                </p>

            </div>
            <div className="right flex flex-col bg-white p-6 rounded-lg w-1/3 text-lg relative shadow border border-2 ">
                <input className="px-4 py-2 mb-2 h-12 border border-1 border-gray-200 rounded-lg outline-blue-600 "
                    type="text"
                    placeholder="Email or phone number"

                /> 
                <input className="px-4 py-2 mb-2 h-12 border border-1 border-gray-200 rounded-lg outline-blue-600"
                    type="password"
                    placeholder="Password"

                />
                <button className="bg-blue-600 hover:bg-blue-700 px-2 w-full    py-3 rounded-lg text-white font-bold cursor-pointer">
                    Log In
                </button>
                <span className="text-blue-600 text-center text-sm hover:underline my-3 cursor-pointer">
                    Forgot password?
                </span>
                <hr className="my-3"></hr>
                <button className="bg-green-600 hover:bg-green-700 px-4 w-fit  mx-auto   py-3 rounded-lg text-white font-bold cursor-pointer" >
                    Create new account
                </button>
                <span className="absolute -bottom-12 text-sm"> <span className="font-semibold hover:underline  "> Create a Page </span> for a celebrity, brand or business. </span>
            </div>

        </div>
    
    );


}

export default Index;