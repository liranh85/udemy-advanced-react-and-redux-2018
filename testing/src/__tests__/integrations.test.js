import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'src/Root'
import App from 'src/components/App'
import { commentsApi } from 'src/common/constants'

// General comments about Integration Tests:
//   - This kind of tests are about testing multiple parts of the application, rather than one unit (one component).
//   - Stephen Grider reckons they are more important than Unit Tests, as they really address how all the parts of the application (including React components, Redux functions, etc.) fit together.

const mockResponse = [
  { name: 'Fetched #1' },
  { name: 'Fetched #2' }
]

beforeEach(() => {
  // Install mock adapter for axios to intercept HTTP requests
  moxios.install()
  // Respond to this request with mock data
  moxios.stubRequest(commentsApi, {
    status: 200,
    response: mockResponse
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments, and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  wrapped.find('.fetch-comments').simulate('click')
  // Wait for all axios requests to complete, then call calback function passed as argument
  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(mockResponse.length)
    done()
    wrapped.unmount()
  })
})
