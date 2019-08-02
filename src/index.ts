//import React from 'react';
const num: number = 42
const str: string = 'string'
const sym: symbol = Symbol('sym')
const bool: boolean = true
const nul: null = null
const und: undefined = undefined

let num1: number | undefined
let strTypes: 'always' | 'never' | 'sometimes'

strTypes = 'always'

enum ConfTypes {
    ALWAYS = 'always',
    NEVER = 'never',
    SOMETIMES = 'sometimes'
}

const type: ConfTypes = ConfTypes.ALWAYS
console.log(type)
