import { mount } from 'enzyme';
import React from 'react';
import test from 'tape';
import App from '../src/App';

test('App mounts', t => {
  t.plan(1);
  const app = mount(<App />);
  t.equal(app.find('h1').text(), 'App')
});

