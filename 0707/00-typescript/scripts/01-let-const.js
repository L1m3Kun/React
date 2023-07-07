"use strict";
// --------------------------------------------------------------------------
// ECMAScript 2015 (v6)
// let, const (block scope)
{
    for (let i = 0, numbers = [3, 6, 9, 12]; i < numbers.length; ++i) {
        // ...
        console.log(i); //
    }
    // console.log(i);
}
// pnpm add -D ts-node 설치를 해야함
// pnpm ts-node src/01-let-const.ts 명령어를 통해 결과값을 볼 수 있음
