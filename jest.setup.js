/* import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() }) */

const Adapter = require('enzyme-adapter-react-16')

require('enzyme').configure({adapter: new Adapter()})
