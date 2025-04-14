export default function concatArrays(array1, array2, string) {
    let result = [...array1, ...array2, ...string];
    return result;
}
