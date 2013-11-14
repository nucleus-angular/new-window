module.exports = {
  name: 'new window',

  'should be able to handle single event': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
    .click('[data-ut="with-name"]')
    .toWindow('new-window')
      .assert.url('https://www.google.com/', 'new window opened')
    .toParentWindow()
    .done();
  }
}