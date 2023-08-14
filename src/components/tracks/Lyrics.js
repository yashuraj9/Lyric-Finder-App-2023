import {useParams,Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import React from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';

const Lyrics = () =>{


const params = useParams();

const [musicLyric,setMusicLyric] = useState({});
const [musicTrack,setMusicTrack] = useState({});

  const state = {
    track : musicTrack,
    lyrics :musicLyric
  };

  console.log(state.track);

  useEffect(()=>{
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${params.id}&apikey=98849a1aad58bdb62a7465bbe1fe735a`)
      .then(res=>{


  setMusicLyric(res.data.message.body.lyrics);

  return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${params.id}&apikey=98849a1aad58bdb62a7465bbe1fe735a`)


  }).then(res=>{
    console.log(res.data);
      setMusicTrack(res.data.message.body.track);
  })
      .catch(err=>console.log(err));
  },[])


if(state.track===undefined || state.lyrics===undefined || Object.keys(state.track).length===0 || Object.keys(state.lyrics).length===0)
return <Spinner />

return (

<React.Fragment>

<Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>

<div className="card">

<h5 className="card-header">

{state.track.track_name} by{' '}
<span className="text-secondary">{state.track.artist_name}</span>


</h5>

<div className="card-body">
<p className="card-text">{state.lyrics.lyrics_body}</p>


</div>
</div>

<ul className="list-group mt-3">
<li className="list-group-item">
<strong>ALBUM ID</strong> : {state.track.album_id}
</li>

<li className="list-group-item">
<strong>Explicit Words</strong> : {state.track.explicit===0 ? 'NO' : 'YES'}
</li>

<li className="list-group-item">
<strong>Release Date</strong> : {state.track.first_release_date}
</li>


</ul>


</React.Fragment>



)

}

export default Lyrics;

// <li className="list-group-item">
// <strong>SONG GENRE</strong> : {state.track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
// </li>

// const responseData = res.data.message.body.track_list;
// const loaded_tracks=[];
//
// for(const key in responseData )
// {
//   loaded_tracks.push({track:responseData[key]});
// }
//       setLyrics(loaded_tracks);

// if(state.tracks===undefined || state.lyrics===undefined || Object.key(state.track).length===0 || Object.key(state.lyrics).length===0)
