import React, { useState } from 'react'
import { auth } from '../../config/db'
import {FacebookAuthProvider ,signInWithPopup} from "firebase/auth"
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/Action/setuser'

const Header = () => {

  const userInfoDetail = useSelector(state => state.setUser.User)

  console.log(userInfoDetail.Name);
  console.log(userInfoDetail.photo);
  

  const provider = new FacebookAuthProvider();
  const dispatch = useDispatch();
  const [profile,setProfile] = useState(false)

  const facebookLogin = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      const userInfo = {
        Name : user.displayName ,
        photo : user.photoURL
      }
      dispatch(setUser(userInfo))
      setProfile(true)
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      setProfile(false)
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
  }

  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex justify-around items-center flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav> */}
    
    {/* <button onClick={facebookLogin} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}

    {profile === true ?  <div className='flex'><p className='text-2xl font-black'>{userInfoDetail.Name}</p>
    <div className="img w-[90px] h-[60px] border-2 border-black" style={{ borderRadius: "100%" }}>
        <img className='w-full h-full rounded-full' src={userInfoDetail.photo} alt="" />
      </div></div>
    :
<button onClick={facebookLogin} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> 
    }
  
  
  </div>
</header>
    </div>
  )
}

export default Header