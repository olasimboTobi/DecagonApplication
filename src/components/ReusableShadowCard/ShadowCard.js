import React from 'react'

const ShadowCard = (props) => {
     const {width, minHeight, children,classN} = props
     return (
       <div className={`${classN} ${width} ${minHeight}`}>{children}</div>
  
     )
   
}

export default ShadowCard