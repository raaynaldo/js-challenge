import { createCallLog } from '../d3'

describe('createCallLog', () => {
  it('should add a new call', () => {
    let callLog = createCallLog();
    callLog.add('INCOMING', '08989225606');
    expect(callLog.getRecent(1)).toEqual([{
      type: 'INCOMING',
      phoneNumber: '08989225606',
      timestamp: (new Date()).toDateString()
    }]);
  })
})
