import {symbol} from 'prop-types'

interface Person {
    lastName: string
}

interface Animal {
    name: string
    breath: (freq: number) => void
}

/*
interface Human extends Person, Animal {
    work: () => void
}
*/

type Human = Person & Animal

function identity<T>(anything: T): T {
    return anything
}

const people: Human[] = []
const people1: Array<Person> = []

type PersonMap = {
    [id: string]: Human
}
