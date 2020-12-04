import React from "react";

function TeachingEntry(props) {
    return (
      <div className='teaching-div'>
        <div>
          <span>{props.subject}</span>
          {
            props.link &&
            <a href={props.link} target='_blank' rel="noopener noreferrer">Link</a>
          }
          <p>{props.institute}</p>
          <div className='teaching-details'>
            <span>
              {
                props.semesters.map((semester, key) => {
                  return <span key={key}>{semester}&nbsp;&nbsp;</span>
                })
              }
            </span>
            <span>&middot;&nbsp;&nbsp;{props.place}</span>
          </div>
        </div>
        <img src={props.image} alt='reference-img' />
      </div>
    );
}

export default TeachingEntry;