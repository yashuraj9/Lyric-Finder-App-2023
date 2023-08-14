import React from 'react'
import {useContext} from 'react';
import Context from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

const Tracks = () =>{

const [state] = useContext(Context);
// const {track_list} = Ctx;
// console.log(Ctx);

// let flag=true;

if(state.track_list===undefined || state.track_list.length===0){
  return <Spinner />
}


return (

<React.Fragment>

<h3 className="text-center mb-4">{state.heading}</h3>

<div className="row">

{state.track_list.map(item=>(
  <Track key={item.track.track_id} track={item.track} />
))}

</div>



</React.Fragment>







)


}

export default Tracks;
