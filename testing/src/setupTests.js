// When Jest starts up, it looks for this file - `src/setupTests.js`, and if found Jest automatically executes it before any other code is loaded.

import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({ adapter: new Adapter() })