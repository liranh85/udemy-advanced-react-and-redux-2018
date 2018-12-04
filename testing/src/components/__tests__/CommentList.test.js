import React from 'react'
import { mount } from 'enzyme'
import Root from 'src/Root'
import CommentList from 'src/components/CommentList'

const comments = ['Comment 1', 'Comment 2']
let wrapped

beforeEach(() => {
  const initialState = { comments }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('shows the text for each comment', () => {
  // wrapped.render() returns a CheerioWrapper (of the Cheerio library), which has a text() method
  const commentListText = wrapped.render().text()
  expect(commentListText).toContain(comments[0])
  expect(commentListText).toContain(comments[1])
})
