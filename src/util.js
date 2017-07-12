export const headerHeight = 48

export function capitalize(str) {
    if (typeof str !== 'string') {
        return str
    }
    if (typeof str[0] !== 'string') {
        return str + str.substring(1).toLowerCase()
    }
    return str[0].toUpperCase() + str.substring(1).toLowerCase()
}

export function titleCase(str) {
    return str.split(' ').map(capitalize).join(' ')
}
