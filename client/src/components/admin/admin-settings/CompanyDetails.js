import React from 'react'
import { Link } from 'react-router-dom'

const CompanyDetails = () => {

  return (
    <div className='row'>
      <div className='col-12 mt-4'>
        <Link to='/settings' className='pl-2 color-thick-green'>Settings</Link>
        <i className='fa fa-angle-right mx-2'></i>
        <Link to='/company-details' className='color-thick-green'>Company Details</Link>
      </div>
      <div className='col-12 my-3'>
        <div className='bg-white rounded-lg shadow p-3'>
          <div className='h5'>Company Details</div>
          <div className='row'>
            <div className='col-md-6 my-2'>
              <label className='text-secondary'>Details: *</label>
              <input
                className='form-control'
              />
            </div>
            <div className='col-md-6 my-2'>
              <label className='text-secondary'>Epayslip logo Display Setting: *</label>
              <input
                className='form-control'
              />
            </div>
            <div className='col-12 my-3'>
              <button
                className='btn btn-info px-4'
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails