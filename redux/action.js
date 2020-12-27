
export const adding = (nameFromFunc, numberForFunc) => (
    {
    type: "ADD",
    payload: { name : nameFromFunc, number: numberForFunc }
}
)
export const clear = () => (
    {
    type: "CLEAR",
})