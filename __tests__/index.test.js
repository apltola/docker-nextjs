import { shallow } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

/* describe('With Snapshot Testing', () => {
  it('App matches snapshot', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
}) */

/* describe('With Enzyme', () => {
  it('App renders without crashing', () => {
    const app = shallow(<App />)

    expect(app.find('p').text()).toEqual('terve')
  })
}) */