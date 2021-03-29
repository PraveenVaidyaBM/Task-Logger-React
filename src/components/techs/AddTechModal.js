import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTechs } from '../../actions/TechActions'

const AddTechModal = ({ addTechs }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'please enter firstname and lastname' })
    } else {
      addTechs({ firstName, lastName })
      M.toast({ html: `${firstName} ${lastName} was added as tech` })
      setFirstName('')
      setLastName('')
    }
  }

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='input-field'>
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor='lastName' className='active'>
            Last Name
          </label>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-green btn-flat'
        >
          Enter
        </a>
      </div>
    </div>
  )
}

AddTechModal.propTypes = {
  addTechs: PropTypes.func.isRequired,
}

export default connect(null, { addTechs })(AddTechModal)
