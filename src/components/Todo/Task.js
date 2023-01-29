import React from 'react'

export default function Task({txt,delf}) {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      
<input type="text" className='mx-3'  readOnly    value={txt}    />       <input type="button" class="btn btn-danger"  onClick={delf}    value="Supprimer" />




    </div>
  )
}
