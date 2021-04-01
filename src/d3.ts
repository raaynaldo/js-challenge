function createCallLog() {
  let log: Array<object> = [];
  // {type: 'INCOMING', phoneNumber: '08989225606', timestamp: '2018-12-11 13:08'}
  return {
    add: (type: string, phoneNumber: string) => {
      // TODO
      const call = {
        type: type,
        phoneNumber: phoneNumber,
        timestamp: (new Date()).toDateString()
      }

      log.push(call);
    },
    getRecent: (number: number) => {
      // TODO: return an array of 5 objects
      return log.slice(Math.max(log.length - number, 0), log.length)
    }
  };
}

export { createCallLog };
