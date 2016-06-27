// Example code taken from egghead.io tutorial series:
// egghead-using-webpack-for-production-javaScript-applications

import {expect} from 'chai'
import getModelStub from './model.stub'
import getViewStub from './view.stub'
import Controller from './controller'

describe('controller', () => {
  it('can be created', () => {
    const controller = getNewController();
    expect(controller).to.exist;
  })
})

function getNewController() {
  const view = getViewStub();
  const model = getModelStub();
  return new Controller(model, view);
}
