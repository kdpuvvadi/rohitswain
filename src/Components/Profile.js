import './Profile.css'

import React from 'react'
import PropTypes from 'prop-types'

import { Avatar } from 'primereact/avatar'
import { Chip } from 'primereact/chip'

import utils from '../utils'
import ShareProfile from './ShareProfile'

function Profile({ profile, username }) {
  const { name, bio, avatar } = profile
  return (
    <section>
      {profile.type && profile.type === 'community' && (
        <div className="flex justify-content-center">
          <Chip template="Community" className="py-2 px-3" />
        </div>
      )}
      <div className="flex justify-content-center align-items-center mb-3">
        <Avatar
          image={avatar}
          imageAlt={`Profile picture of ${name}`}
          size="xlarge"
          shape="circle"
          onImageError={(error) => {
            utils.setDefaultSVG(name, error)
          }}
        />
      </div>
      <div className="flex flex-column sm:flex-row justify-content-center align-items-center mb-3">
          <h1 className="mx-2 my-0">{name}</h1>
        </div>
      <div className="flex justify-content-center w-50 mb-3">
        <p>{bio}</p>
        <p className="shareprofile-icon"><ShareProfile username={username} /></p>
      </div>
    </section>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    bio: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
}

export default Profile
