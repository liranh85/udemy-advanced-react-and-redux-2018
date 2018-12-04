import React from 'react'
import { mount } from 'enzyme'
import Root from 'src/Root'
import CommentBox from 'src/components/CommentBox'

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has a text area and a button', () => {
  // We're using the Full DOM rendering from Enzyme in here. We're doing this not because it's necessary in this case (it isn't, because there are no React component children), but just to demonstrate how to do so.
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

describe('The text area', () => {
  const value = 'new comment'

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value
      }
    })
    // Since this.setState() (called in handleSubmit() ) is asyncronous, we need to force update our component
    wrapped.update()
  })

  it('allows users to type in it', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(value)
  })

  it('gets emptied after submitting the form', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
