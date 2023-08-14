import {useEffect,useState} from 'react';
import Context from './context';
import axios from 'axios';


let state = {
  track_list:[],
  heading:''
};


const Provider = (props) =>{

const [lyrics,setLyrics] = useState(state);

useEffect(()=>{
  axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=98849a1aad58bdb62a7465bbe1fe735a`)
    .then(res=>{

const responseData = res.data.message.body.track_list;
// const loaded_tracks=[];
//
// for(const key in responseData )
// {
//   loaded_tracks.push({track:responseData[key]});
// }
      setLyrics({track_list:responseData,
      heading:'Top 10 Tracks'});

})
    .catch(err=>console.log(err));
},[])


  return <Context.Provider value={[lyrics,setLyrics]}>{props.children}</Context.Provider>
}

export default Provider;

// const responseData = res.data;
// const loaded_tracks=[];
//
// for(const key in responseData )
// {
//   loaded_tracks.push({track:responseData[key].message.body.track_list});
// }
//       setLyrics(loaded_tracks);

// setLyrics({track_list:res.data.message.body.track_list});
// console.log(res.data.message.body.track_list);
