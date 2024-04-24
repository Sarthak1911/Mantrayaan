import React from 'react'
import "./Lists.css";

export default function Lists({verse, onShlokaClick}) {

  return (
    <div className='bcontainer'>
        <div className="lcontainer">
            {verse.map((shloka, index)=>{
                return(
                    <div className="body" key={index} onClick={()=> onShlokaClick(shloka)}>
                        <h5 className='sid'>Shloka: {shloka.id}</h5>
                        <p>{shloka.text}</p>
                    </div>
                );
            })}
        </div>
    </div>
  )
}
