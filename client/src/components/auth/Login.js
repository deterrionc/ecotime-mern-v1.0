import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-8 bg-grey min-vh-100 d-flex align-items-center justify-content-center'>
          <img className='img-fluid' alt='SETIMAGE' src='/img/logo.png' />
        </div>
        <div className='col-md-4 bg-white min-vh-100 d-flex align-items-center justify-content-center'>
          <form className="col form mx-5" onSubmit={onSubmit}>
            <div className="form-group">
              <label className='text-secondary'>Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className='form-control'
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label className='text-secondary'>Password</label>
              <input
                type="password"
                placeholder="Password"
                className='form-control'
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
              />
            </div>
            <input type="submit" className="btn btn-success form-control" value="Login" />
          </form>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
