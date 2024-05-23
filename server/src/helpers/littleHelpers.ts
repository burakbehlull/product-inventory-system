function repeatString(str:string, count:any) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += str;
        if (i < count - 1) {
            result += ',';
        }
    }
    return result;
}

export {
    repeatString
}