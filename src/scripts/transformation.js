export function translationMatrix(translationFactor){
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        translationFactor[0], translationFactor[1], translationFactor[2], 1
    ]
}
export function xRotationMatrix(rotationFactor){
    return [
        1, 0, 0, 0,
        0, Math.cos(rotationFactor), -Math.sin(rotationFactor), 0,
        0, Math.sin(rotationFactor), Math.cos(rotationFactor), 0,
        0, 0, 0, 1
    ]
}
export function yRotationMatrix(rotationFactor){
    return [
        Math.cos(rotationFactor), 0, Math.sin(rotationFactor), 0,
        0, 1, 0, 0,
        -Math.sin(rotationFactor), 0, Math.cos(rotationFactor), 0,
        0, 0, 0, 1
    ]
}
export function zRotationMatrix(rotationFactor){
    return [
        Math.cos(rotationFactor), -Math.sin(rotationFactor), 0, 0,
        Math.sin(rotationFactor), Math.cos(rotationFactor), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}
export function scaleMatrix(scaleFactor){
    return [
        scaleFactor[0], 0, 0, 0,
        0, scaleFactor[1], 0, 0,
        0, 0, scaleFactor[2], 0,
        0, 0, 0, 1
    ]
}