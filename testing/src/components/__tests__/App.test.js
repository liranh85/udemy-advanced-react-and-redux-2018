import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Root from 'src/Root'
import App from 'src/components/App'
import CommentBox from 'src/components/CommentBox'
import CommentList from 'src/components/CommentList'

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Root>
  )
})

it('has two Links', () => {
  expect(wrapped.find('Link').length).toEqual(2)
})

it('shows an auth button', () => {
  expect(wrapped.find('.auth-button').length).toEqual(1)
})

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
