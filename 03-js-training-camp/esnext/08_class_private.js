class ClassWithPrivateProperty {
  #privateField;
  static #PRIVATE_STATIC_FIELD;

  constructor() {
    this.#privateField = 42;
  }

  #privateMethod() {
    return 'hello world';
  }

  publicMethod() {
    return 'hello world';
  }

  static #privateStaticMethod() {
    return 'hello world';
  }
}

const cla = new ClassWithPrivateProperty();

cla.publicMethod();
