// /**
//  * Convert string literal type to uppercase
//  */
// type Uppercase<S extends string> = intrinsic;

// /**
//  * Convert string literal type to lowercase
//  */
// type Lowercase<S extends string> = intrinsic;

// /**
//  * Convert first character of string literal type to uppercase
//  */
// type Capitalize<S extends string> = intrinsic;

// /**
//  * Convert first character of string literal type to lowercase
//  */
// type Uncapitalize<S extends string> = intrinsic;

const _uppercase: Uppercase<'hello'> = 'HELLO';
const _lowercase: Lowercase<'hello'> = 'hello';
const _capitalize: Capitalize<'hello'> = 'Hello';
const _uncapitalize: Uncapitalize<'Hello'> = 'hello';
