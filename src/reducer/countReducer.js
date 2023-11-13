const countReducer = (state, action) => {
    console.log("state", state)
    console.log("action", action)

    if (action.type === "INCREMENT") {
        return { count: state.count + 1 }
    } else if (action.type === "DECREMENT") {
        return { count: state.count - 1 }
    } else if (action.type === "RESET") {
        return { count: 0 }
    } else {
        throw console.error("Something goes wrong!");
    }
}

export { countReducer }

