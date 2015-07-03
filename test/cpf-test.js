var output,
    pattern = /^\d{3}(\.\d{3}){2}\-\d{2}$/,
    str = '999.999.999-00',
    valid = (output = pattern.exec(str));

if (valid !== null) {
    if (output.index === pattern.lastIndex) {
        pattern.lastIndex++;
    }
}

console.log(output[0]);
