import React from 'react'
import { connect } from 'react-redux'
import { logout, setCurrentPage } from '../../actions/auth'
import { useHistory } from 'react-router-dom'

const AdminSidebar = ({ user, logout, setCurrentPage, currentPage }) => {
  let history = useHistory()

  const goPage = async location => {
    setCurrentPage(location)
    await history.push(`/`)
    await history.push(`/dashboard`)

    if (location === 'dashboard') {
      await history.push(`/dashboard/`)
      return
    }
    await history.push(`/dashboard/${location}`)
  }

  return (
    <div className='col-lg-2 col-md-3 sidebar p-0'>
      <div className='container-fluid p-0'>
        <div className='text-center m-4'>
          <img className='img-fluid' alt='SETIMAGE' src='/img/logo.png' />
        </div>
        <div className={'row mx-3 h5 menuItem rounded p-2 ' + (currentPage === 'dashboard' ? 'selected' : '')} onClick={() => goPage('dashboard')}>
          <div className='d-flex align-items-center'>
            <div><i className='mr-2 fa fa-user'></i></div>
            <div>My Attendance</div>
          </div>
        </div>
        <div className={'row mx-3 h5 menuItem rounded p-2 ' + (currentPage === 'hr' ? 'selected' : '')} onClick={() => goPage('hr')}>
          <div className='d-flex align-items-center'>
            <div><i className='mr-2 fa fa-user'></i></div>
            <div>HR</div>
          </div>
        </div>
        <div className={'row mx-3 h5 menuItem rounded p-2 ' + (currentPage === 'settings' ? 'selected' : '')} onClick={() => goPage('settings')}>
          <div className='d-flex align-items-center'>
            <div><i className='mr-2 fa fa-user'></i></div>
            <div>Settings</div>
          </div>
        </div>
        <div className='signoutLink top-border p-0 pt-3'>
          <div className='row mx-3 h5 menuItem rounded p-2' onClick={() => {
            setCurrentPage('dashboard')
            logout()
          }}>
            <div className='d-flex align-items-center'>
              <i className='mr-2 fa fa-sign-out'></i>
              <div>Sign Out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  currentPage: state.auth.currentPage
})

export default connect(mapStateToProps, { logout, setCurrentPage })(AdminSidebar)