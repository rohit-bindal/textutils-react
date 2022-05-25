import React from 'react'

export default function Alert(props) {

  return (
    <div style={{height:'65px'}}>
      {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
     <strong>Successful - </strong>{props.msg}
     </div>}
    </div>
  )
}
