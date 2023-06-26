import React, { useState } from 'react'
import Team from './Team'

import './TeamList.css'
import { initialTeamList } from './config'
import { checkDisabledButton } from './helpers'

const TeamList = () => {
  const [value, setValue] = useState('')
  const [teamList, setTeamList] = useState(initialTeamList)

  const updateChannel = (teamId, channels) => {
    setTeamList((prevTeamList) => {
      const updatedTeamList = [...prevTeamList]
      updatedTeamList[teamId] = { ...updatedTeamList[teamId], channels }
      return updatedTeamList
    })
  }

  const addToTeamList = () => {
    if (value.trim() !== '' && !checkDisabledButton(teamList, value)) {
      const newTeam = {
        name: value,
        channels: [],
      }

      const updatedTeamList = [...teamList, newTeam]

      setValue('')
      setTeamList(updatedTeamList)
    }
  }

  return (
    <div className="w-50 mx-auto">
      <div className="card w-35 mt-50 mx-auto px-10 py-15">
        <div className="layout-column" data-testid="team-list">
          {teamList && teamList.map((team, id) => <Team key={id} id={id} team={team} updateChannel={updateChannel} />)}
        </div>
        <div className="layout-row">
          <input
            placeholder="Enter Team Name"
            className="team-list-input w-75"
            data-testid="team-name-input"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button
            className="team-list-btn x-small w-35 h-30 pa-6 ma-0 ml-6"
            data-testid="add-team-btn"
            disabled={!value || checkDisabledButton(teamList, value)}
            onClick={addToTeamList}
          >
            Add Team
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeamList
