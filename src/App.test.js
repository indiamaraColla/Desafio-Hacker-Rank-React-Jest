import '@testing-library/jest-dom/extend-expect'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import React from 'react'
import App from './App'

const TEST_IDS = {
  addTeamBtnId: 'add-team-btn',
  addChannelBtnPrefix: 'add-channel-btn-',
  teamNameInputId: 'team-name-input',
  channelNameInputPrefix: 'channel-name-input-',
  removeChnlBtnPrefix: 'remove-channel-button-',
  chnlListPrefix: 'channel-list-',
  teamListId: 'team-list',
}

describe('Teams and Channel List Application', () => {
  let addTeamBtn
  let addChannelBtn1
  let addChannelBtn2
  let teamNameInput
  let channelNameInput2
  let removeChnlBtn1
  let removeChnlBtn2
  let channelList2
  let teamList

  afterEach(() => {
    cleanup()
  })

  const changeTeamInput = (value) => {
    fireEvent.change(teamNameInput, { target: { value: value } })
  }

  const changeChannelInput = (value) => {
    fireEvent.change(channelNameInput2, { target: { value: value } })
  }

  it('add team and add channel buttons should be disabled initially', () => {
    render(<App />)
    addTeamBtn = screen.getByTestId(TEST_IDS.addTeamBtnId)
    addChannelBtn1 = screen.getByTestId(TEST_IDS.addChannelBtnPrefix + '0')
    addChannelBtn2 = screen.getByTestId(TEST_IDS.addChannelBtnPrefix + '1')

    expect(addTeamBtn.disabled).toBe(true)
    expect(addChannelBtn1.disabled).toBe(true)
    expect(addChannelBtn2.disabled).toBe(true)
  })

  it(
    'add team button should be enabled only if data entered in input is correct ' +
      'and clicking on button should add it to the list of teams',
    () => {
      render(<App />)
      addTeamBtn = screen.getByTestId(TEST_IDS.addTeamBtnId)
      teamNameInput = screen.getByTestId(TEST_IDS.teamNameInputId)
      teamList = screen.getByTestId(TEST_IDS.teamListId)

      changeTeamInput('Team3')
      expect(addTeamBtn.disabled).toBe(false)
      fireEvent.click(addTeamBtn, { button: '0' })
      expect(teamList.children.length).toEqual(3)
      expect(teamList.children[2].textContent).toContain('Team3')
    }
  )

  it('add team button should be disabled if data entered in + input is empty or team name already exists', () => {
    render(<App />)
    addTeamBtn = screen.getByTestId(TEST_IDS.addTeamBtnId)
    teamNameInput = screen.getByTestId(TEST_IDS.teamNameInputId)

    changeTeamInput('Team3')
    expect(addTeamBtn.disabled).toBe(false)
    changeTeamInput('')
    expect(addTeamBtn.disabled).toBe(true)
    changeTeamInput('Team2')
    expect(addTeamBtn.disabled).toBe(true)
  })

  it(
    'add channel button should be enabled only if data entered in input is correct ' +
      'and clicking on button should add it to the list of channels',
    () => {
      render(<App />)
      addChannelBtn2 = screen.getByTestId(TEST_IDS.addChannelBtnPrefix + '1')
      channelNameInput2 = screen.getByTestId(TEST_IDS.channelNameInputPrefix + '1')
      channelList2 = screen.getByTestId(TEST_IDS.chnlListPrefix + '1')

      changeChannelInput('Channel0')
      expect(addChannelBtn2.disabled).toBe(false)
      fireEvent.click(addChannelBtn2, { button: '0' })
      expect(channelList2.children.length).toEqual(3)
      expect(channelList2.children[2].textContent).toContain('Channel0')
    }
  )

  it(
    'add channel button should be disabled if data entered in ' + 'input is empty or channel name already exists',
    () => {
      render(<App />)

      addChannelBtn2 = screen.getByTestId(TEST_IDS.addChannelBtnPrefix + '1')
      channelNameInput2 = screen.getByTestId(TEST_IDS.channelNameInputPrefix + '1')

      changeChannelInput('Channel3')
      expect(addChannelBtn2.disabled).toBe(false)
      changeChannelInput('')
      expect(addChannelBtn2.disabled).toBe(true)
      changeChannelInput('Channel2')
      expect(addChannelBtn2.disabled).toBe(true)
    }
  )

  it('clicking on the remove button should remove the channel from the list', () => {
    render(<App />)
    removeChnlBtn1 = screen.getByTestId(TEST_IDS.removeChnlBtnPrefix + '11')
    removeChnlBtn2 = screen.getByTestId(TEST_IDS.removeChnlBtnPrefix + '12')
    channelList2 = screen.getByTestId(TEST_IDS.chnlListPrefix + '1')

    fireEvent.click(removeChnlBtn1, { button: 0 })
    expect(channelList2.children.length).toEqual(1)
    expect(channelList2.children[0].textContent).toContain('Channel2')

    fireEvent.click(removeChnlBtn2, { button: 0 })
    expect(channelList2.children.length).toEqual(0)
  })
})
