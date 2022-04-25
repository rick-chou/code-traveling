function foo(p1: string, p2: number) {}

type params = Parameters<typeof foo>; // --> type params = [p1: string, p2: number]
