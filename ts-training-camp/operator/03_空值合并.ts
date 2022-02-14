// ?? 只会判断 undefined null

// || 会判断所有假值

const num1 = null ?? 1;
const num2 = undefined ?? 1;
const num3 = 0 ?? 1;
const num4 = 0 || 1;
