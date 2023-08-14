import {useState,useContext,useEffect} from 'react';
import Context from '../../context';
import axios from 'axios';


const Search = () =>{

  const [Input,setInput] = useState('');
  const [tracktitle,setTrackTitle] = useState('');
  const [lyric,setLyric] = useContext(Context);

// const state = {
//   trackTitle:Input
// }

useEffect(()=>{
  axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${tracktitle}&page_size=10&page=1&s_track_rating=desc&apikey=98849a1aad58bdb62a7465bbe1fe735a`)
    .then(res=>{

      const responseData = res.data.message.body.track_list;
      // console.log(responseData);
      // const loaded_tracks=[];
      //
      // for(const key in responseData )
      // {
      // loaded_tracks.push({track:responseData[key]});
      // }

        setLyric({track_list:responseData,heading:'Search Results'});


  })
    .catch(err=>console.log(err));

},[tracktitle])

const onSubmitHandler = (e) =>{

e.preventDefault();
setTrackTitle(Input);

}

const setInputHandler = e =>{
  setInput(e.target.value);
}

return (

<div className="card card-body mb-4 p-4">

<h1 className="display-4 text-center">
<i className="fas fa-music"></i>
Search For a Song

</h1>

<p className="lead text-center">Get the lyrics for any song</p>

<form onSubmit={onSubmitHandler}>

<div className="form-group">

<input type="text" className="form-control form-control-lg mb-3" placeholder="Song Title..." name="Input"
value={Input} onChange={setInputHandler} />
</div>


<button className="btn btn-primary btn-lg w-100 mb-5" type="submit">Get Track Lyrics</button>

 </form>





</div>




)


}

export default Search;

// const responseData = res.data.message.body.track_list;
// const loaded_tracks=[];
//
// for(const key in responseData )
// {
// loaded_tracks.push({track:responseData[key]});
// }
//     setLyrics(loaded_tracks);
