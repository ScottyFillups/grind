function Spy (target, method) {
  timesCalled = 0;

  return {
    count: () => timesCalled
  }
}

module.exports = Spy
