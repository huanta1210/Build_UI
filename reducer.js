const innit = {
    cars: ['BMW'],
}
export default function reducer(state = innit, action, args) {
    switch(action) {

        case'ADD':
            const [newCar] = args
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
        default:
            return state
    }
}