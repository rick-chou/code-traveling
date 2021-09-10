new Vue({
  el: '#app',
  data: {
    // result
    equation: '0',

    isDecimalAdded: false,
    isOperatorAdded: false,

    isStarted: false,
    isEntering: false,
  },
  methods: {
    isOperator(character) {
      return ['+', '-', '×', '÷'].indexOf(character) > -1;
    },
    // Operators or Numbers
    append(character) {
      // Start
      if (this.equation === '0' && !this.isOperator(character)) {
        if (character === '.') {
          this.equation += '' + character;
          this.isDecimalAdded = true;
        } else {
          this.equation = '' + character;

          this.isEntering = true;
        }

        this.isStarted = true;
        return;
      }

      // If Number
      if (!this.isOperator(character)) {
        if (character === '.' && this.isDecimalAdded) {
          return;
        }

        if (character === '.') {
          this.isDecimalAdded = true;
          this.isOperatorAdded = true;
        } else {
          this.isOperatorAdded = false;
        }

        if (!this.isEntering) {
          this.isEntering = true;
          this.equation = '' + character;
          return;
        }

        this.equation += '' + character;
      }

      // Added Operator
      if (this.isOperator(character) && !this.isOperatorAdded) {
        this.equation += '' + character;
        this.isDecimalAdded = false;
        this.isOperatorAdded = true;

        this.isEntering = true;
      }
    },
    // When pressed '='
    calculate() {
      let result = this.equation
        .replace(new RegExp('×', 'g'), '*')
        .replace(new RegExp('÷', 'g'), '/');
      let ans = eval(result);

      this.equation = (ans < 1.0e9 ? parseFloat(ans.toFixed(9)) : ans.toExponential(3)).toString();
      this.isDecimalAdded = false;
      this.isOperatorAdded = false;

      this.isEntering = false;
    },
    // When pressed '+/-'
    calculateToggle() {
      if (this.isOperatorAdded || !this.isStarted) {
        return;
      }

      this.equation = this.equation + '* -1';
      this.calculate();
    },
    // When pressed '%'
    calculatePercentage() {
      if (this.isOperatorAdded || !this.isStarted) {
        return;
      }

      this.equation = this.equation + '* 0.01';
      this.calculate();
    },
    // When pressed 'AC'
    clear() {
      this.equation = '0';
      this.isDecimalAdded = false;
      this.isOperatorAdded = false;
      this.isStarted = false;

      this.isEntering = false;
    },
  },
});
