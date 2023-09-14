import { createContext } from 'react'

// Provider,Consumer 来源于同一个 createContext()
const {Provider,Consumer} = createContext({
    name: 'ly',
    age: 22
});

export {
    Provider,
    Consumer
}