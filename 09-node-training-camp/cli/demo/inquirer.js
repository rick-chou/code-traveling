const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'Select Compiler',
      name: 'compiler',
      choices: [
        {
          name: 'Babel',
        },
        {
          name: 'TypeScript',
        },
      ],
      validate(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one topping.';
        }

        return true;
      },
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers));
  });
