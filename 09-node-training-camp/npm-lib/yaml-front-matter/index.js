var fs = require('fs');
var yamlFront = require('yaml-front-matter');

// const content = fs.readFileSync('./demo.md');
// console.log(yamlFront.loadFront(content));

/**
 * 
{
  name: 'Derek Worthen',
  age: 127,
  contact: { email: 'email@domain.com', address: 'some location' },
  pets: [ 'cat', 'dog', 'bat' ],
  match: /pattern/gim,
  run: [Function: anonymous],
  __content: '\n\nSome Other content\n'
}
 */

const content = fs.readFileSync('./docs.md');
console.log(yamlFront.loadFront(content));
