import React from 'react'

export default function Alert(props) {
  return (
 
   props.alrt && <div class={`alert alert-${props.alrt.type} alert-dismissible fade show`}>
        <strong>{props.alrt.message}</strong>
    </div>
  
  )
}
