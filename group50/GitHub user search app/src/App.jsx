import { useState } from 'react'
import axios from 'axios'

// images
import githubcat from './assets/github-cat-logo.png'
import locatoin from './assets/icons8-location-100.png'
import twiterr from './assets/icons8-twitter-bird.svg'
import link from './assets/icons8-link-64.png'
import building from './assets/icons8-building-100.png'
import sun from './assets/icons8-sun.svg'

function App() {
  // api : http://api.github.com/users/
  let [userinfo, setuserinfo] = useState({
    name: "the Octocat",
    login:"",
    avatar_url: "https://octodex.github.com/images/orderedlistocat.png",
    created_at: "joined 25 jan 2011",
    url: "@octocat",
    bio: "this profile has no bio",
    followers: "3938",
    following: "9",
    public_repos: "8",
    location: "San fransciso",
    twitter_username: "Not aviable",
    blog: ">http:github/users"
  });



  function handleSubmit(event) {
    event.preventDefault()
    let searchUser = event.target.username.value;

    axios.get(`http://api.github.com/users/${searchUser}`)
      .then((response) => {
        console.log(response.data)
        setuserinfo({
          name: response.data.name,
          login:response.data.login,
          avatar_url: response.data.avatar_url,
          created_at: response.data.created_at,
          url: response.data.html_url,
          bio: response.data.bio,
          followers: response.data.followers,
          following: response.data.following,
          public_repos: response.data.public_repos,
          location: response.data.location,
          twitter_username: response.data.twitter_username,
          blog: response.data.blog
        })

      }).catch((err) => {
        console.log(err)
        setuserinfo({
          name: "Could not find",
          login:"",
          avatar_url: "https://octodex.github.com/images/orderedlistocat.png",
          created_at: "",
          url: "",
          bio: "",
          followers: "",
          following: "",
          public_repos: "",
          location: "",
          twitter_username: "",
          blog: ""
        })
      });
    event.target.username.value = ""
  }
  return (
    <>

      <div className='w-lg mx-auto max-h-fit flex flex-col gap-5 rounded-xl '>
        <div className='w-full flex justify-between  px-3 py-1.5 text-xl text-white '>
          <h1>devfinder</h1>
          < button className='flex gap-2 items-center justify-center'>
            <p>light</p>
            <img src={sun} alt="sun" className='w-6.5 h-6.5' />
          </button>
        </div>

        <div className='w-full p-3 bg-Main rounded-xl'>
          <form className=' w-full flex justify-between items-center gap-5 text-white' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='search github user...'
              className='w-full h-full text-white border-none py-2 px-1.5'
              name='username'
            />

            <button type="submit " className='h-full bg-blue-600 rounded-[7px] px-3 py-2'>seerch</button>
          </form>
        </div>
        <div className='w-full h-80 bg-Main rounded-xl py-11 px-10   flex gap-5 '>
          <div className='h-full min-w-fit '>
            <img src={userinfo.avatar_url} alt="logo" className='rounded-full w-24 h-24 ' />
          </div>
          <div className='w-full h-full flex flex-col gap-4 '>
            <div className='w-full flex flex-col gap-0.5 '>
              <div className='flex w-full justify-between'>
                <h2 className='text-white text-xl'>{userinfo.name}</h2>
                <p className='text-gray-600'>{userinfo.created_at.slice(0, 10)}</p>
              </div>
              <a href={userinfo.url} className='text-blue-800'>{userinfo.login}</a>
              <p className='text-gray-600 mt-1'>{userinfo.bio === null ? "profile has no bio" : userinfo.bio}</p>
            </div>
            <div className='w-full bg-Background flex gap-4 py-3 px-2 items-center justify-evenly rounded-xl '>
              <div className='flex flex-col text-start'>
                <h5 className='text-gray-700'>repos</h5>
                <h4 className='text-white text-xl'>{userinfo.public_repos}</h4>
              </div>
              <div className='flex flex-col text-start'>
                <h5 className='text-gray-700'>frolowers</h5>
                <h4 className='text-white text-xl'>{userinfo.followers}</h4>
              </div>
              <div className='flex flex-col text-start'>
                <h5 className='text-gray-700'>following</h5>
                <h4 className='text-white text-xl'>{userinfo.following}</h4>
              </div>
            </div>
            <div className='w-full flex gap-8 text-gray-200'>
              <div className='flex flex-col gap-0.5 '>
                <div className='flex flex-row  gap-1.5 items-center justify-start'>
                  <img src={locatoin} alt="location" className='w-5 h-5' />
                  <p>{userinfo.location === null ? "not avable" : userinfo.location}</p>
                </div>
                <div className='flex flex-row  gap-1.5 items-center justify-start'>
                  <img src={link} alt="twiterr" className='w-5 h-5' />
                  <a href={userinfo.url}>
                    <p className='hover:text-blue-800'>{userinfo.url === "" ? "not avable" : userinfo.url.slice(19, -1)}</p>
                  </a>

                </div>
              </div>
              <div className='flex flex-col gap-0.5 '>
                <div className=' w-max flex flex-row gap-1.5 items-center justify-start'>
                  <img src={twiterr} alt="twiterr" className='w-5 h-5' />

                  <p >{userinfo.twitter_username === null ? "not avable" : userinfo.twitter_username}</p>

                </div>
                <div className='flex  flex-row  gap-1.5 items-center justify-start'>
                  <img src={building} alt="twiterr" className='w-5 h-5' />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
