export function raw2riddle(data) {
    if(!data.length) return;
    const flatData = data.split(/\s/).filter(e=>e.length),
    result = [];
    while(flatData.length) {
        const hint = {
            code: flatData.shift().split('').map(Math.floor),
            included: Math.floor(flatData.shift()),
            sorted: Math.floor(flatData.shift())
        };
        result.push(hint);
    }
    return result;
}

export function riddle2raw(riddle) {
    if(!riddle.length) return;
    return riddle.map(hint => (
        `${hint.code.join('')} ${hint.included} ${hint.sorted}\n`
    )).join('');
}