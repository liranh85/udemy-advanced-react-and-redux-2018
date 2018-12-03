import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it('has a text area and a button', () => {
  // We're using the Full DOM rendering from Enzyme in here. We're doing this not because it's necessary in this case (it isn't, because there are no React component children), but just to demonstrate how to do so.
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

it('has a text area that users can type in', () => {
  const value = 'new comment'
  wrapped.find('textarea').simulate('change', {
    target: {
      value
    }
  })

  // Since this.setState() is asyncronous, we need to force update our component
  wrapped.update()

  expect(wrapped.find('textarea').prop('value')).toEqual(value)
})
