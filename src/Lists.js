import React from "react";

const List = ({people}) => {
    return (
      <>
        {people.map((person) => {
            const {id, name, age, image} = person
            return <article key={id} className={person}>

              <div className="trial" style={{display: "flex"}}>
                <img  src={image} alt={name}></img>
                
                    <h4 className="push">{name} is {age} years old today</h4>
                    
                    {/* <p style={{}}>{age} years</p> */}
                </div>
            </article> 
            
        })

        }
      </>  
    )

}
export default List