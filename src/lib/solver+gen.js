const getBlankCodex = (codeLength) => '0'.repeat(codeLength).split('')
.map(e => ({
    include: {}, exclude: {}
})),
flattenCodex = codex => codex.reduce((a,b)=>({
    include: {...a.include, ...b.include},
    exclude: {...a.exclude, ...b.exclude}
}))

export function solve(riddle, base=10, allowDuplicates=true) {
    const outcomeBlocks = riddle.map(hint => 
        getOutcomes(hint, base)
    ),
    codeLength = riddle[0].code.length,
    paths = []

    //console.log(riddle)
    //console.log(outcomeBlocks)
    function go(y=-1, codex=getBlankCodex(codeLength)) {
        for(const codex2 of outcomeBlocks[y+1]) {
            const merged = validMerge(codex, codex2)
            if(merged) {
                if(y+1 == outcomeBlocks.length - 1) {
                    //if(merged.every(cell=>Object.keys(cell.include).length))
                        paths.push( merged )
                } else go(y+1, merged)
            }
        }
    }
    
    go()
    const solutions = paths.map(codex => solveCodex(codex, base)).filter(e=>e)

    return allowDuplicates ? solutions :
        solutions.filter(
            solution => !solution.some((e,i,arr) => arr.indexOf(e) != i)
        )
}

function solveCodex(codex, base=10) {
    const getCount = digit => codex.reduce((acc, cell) => (
        acc + Object.keys(cell.include).map(Math.floor)
        .filter(digit2 => digit2 == digit)
        .length
    ), 0),
    getSingles = () => codex.flatMap(
        cell => {
            const included = Object.keys(cell.include).map(Math.floor)
            return included.filter(digit => getCount(digit) == 1)
        }
    ),
    getIsolates = () => codex.flatMap(
        cell => {
            const included = Object.keys(cell.include).map(Math.floor)
            return included.length == 1 ? included : []
        }
    )

    codex.forEach(cell => {
        if(Object.keys(cell.exclude).length == base - 1) {
            for(let n=0; n<base; n++)
                if(!cell.exclude[n])
                    cell.include[n] = true
        }
    })

    for(let singles = getSingles(), isolates = getIsolates(), x = true;
        x;
        singles = getSingles()) {

        x = false
        for(const single of singles) {
            codex.forEach(cell => {
                for(const digit in cell.include) {
                    if(digit != single && cell.include[single]) {
                        delete cell.include[digit]
                        x = true
                    }
                }
            })
        }

        for(const isolate of isolates) {
            codex.forEach(cell => {
                const included = Object.keys(cell.include)
                if(included.length > 1 && cell.include[isolate]) {
                    delete cell.include[isolate]
                    x = true
                }
            })
        }
        isolates = getIsolates()
    }

    if(
        codex.every(cell => Object.keys(cell.include).length == 1)
    ) return codex.map(cell => Math.floor(Object.keys(cell.include)[0]))
}

function validMerge(codex1, codex2) {
    const mergedCodex = mergeCodexes(codex1, codex2),
    flatMerge = flattenCodex(
        mergedCodex
    ),
    flat1 = flattenCodex(codex1),
    flat2 = flattenCodex(codex2)

    if(
        [flat1, flat2].every(flatCodex => Object.keys(flatCodex.include).every(
            digit => flatMerge.include[digit]
        ))
    ) return mergedCodex

    return undefined
}

function mergeCodexes(codex1, codex2) {
    const codeLength = codex1.length,
    codex3 = getBlankCodex(codeLength)

    for(let i=0; i<codeLength; i++) {
        codex3[i].include = {...codex1[i].include, ...codex2[i].include}
        codex3[i].exclude = {...codex1[i].exclude, ...codex2[i].exclude}

        for(const digit in codex3[i].include) {
            if(codex3[i].include[digit] && codex3[i].exclude[digit]) {
                delete codex3[i].include[digit]
                //delete codex3[i].exclude[digit]
            }
        }
    }

    return codex3
}

function getOutcomes(hint, base=10) {
    const {code, included, sorted} = hint,
        codeLength = code.length
    
    if(included > codeLength)
        return []

    if(included == 0) {
        const codex = getBlankCodex(codeLength)
        for(const cell of codex)
            code.forEach(digit => cell.exclude[digit] = true)
        return [codex]
    }
    
    let inclusionGroups = [], x = 0

    for(let i=0; i<=codeLength-included; i++) {
        let groups = [], group = {}
        group[i] = code[i]
        groups.push(group)

        while(
            Object.keys(groups.slice(-1)[0]).length < included
        ) {
            const newGroups = []
            for(const oldgroup of groups) {
                const oldLength = Object.keys(oldgroup).length,
                    maxIndex = Math.floor(Object.keys(oldgroup).sort((a,b)=>b-a)[0]);
                for(let j= /*i+oldLength*/ maxIndex + 1;
                    j<=codeLength-(included-oldLength);
                    j++) {
                    const newGroup = {...oldgroup}
                    newGroup[j] = code[j]
                    newGroups.push(newGroup)
                    
                    x++
                    if(x >= 1000) return inclusionGroups
                }
            }
            groups = newGroups
        }
        inclusionGroups = inclusionGroups.concat(groups)
    }

    const codexes = []

    for(const group of inclusionGroups) {
        if(sorted == 0) {
            const codex = getBlankCodex(codeLength)

            for(const index in group) {
                for(let i=0; i<codeLength; i++) {
                    if(i == index) codex[i].exclude[code[index]] = true
                    else codex[i].include[code[index]] = true
                }
            }

            const excluded = code.filter(e=>!Object.values(group).includes(e))
            codex.forEach(cell => {
                excluded.forEach(digit => {
                    cell.exclude[digit] = true
                })
            })

            codexes.push(codex)
            continue
        }

        const combos = [...combinations(Object.keys(group).map(str=>Math.floor(str)), sorted)]
        
        for(const sortedIndexes of combos) {
            const codex = getBlankCodex(codeLength)
            for(const index of sortedIndexes) {
                codex[index].include[code[index]] = true

                '0'.repeat(base).split('').map((e,i)=>i).filter(e=>e!=code[index])
                .forEach(digit => codex[index].exclude[digit] = true)

                /*for(let i=0; i<codeLength; i++) {
                    if(i != index) codex[i].exclude[code[index]] = true
                }*/
            }

            const unsortedIndexes = Object.keys(group).map(Math.floor).filter(e=>!sortedIndexes.includes(e))

            for(const index of unsortedIndexes) {
                for(let i=0; i<codeLength; i++) {
                    if(i == index) codex[i].exclude[code[index]] = true
                    else if(!sortedIndexes.includes(i)) codex[i].include[code[index]] = true
                }
            }

            const excluded = code.filter(e=>!Object.values(group).includes(e))
            
            codex.forEach(cell => {
                excluded.forEach(digit => {
                    cell.exclude[digit] = true
                })
            })

            codexes.push(codex)
        }
    }
    
    return codexes
}

// credit to Bret Lowrey
// https://lowrey.me/es6-javascript-combination-generator/
function* combinations(array, length) {
    for (let i = 0; i < array.length; i++) {
        if (length === 1) {
            yield [array[i]];
        } else {
            const remaining = combinations(array.slice(i + 1, array.length), length - 1);
            for (let next of remaining) {
                yield [array[i], ...next];
            }
        }
    }
}

const randItem = arr => arr[ Math.floor( Math.random() * arr.length ) ],
shuffle = arr => arr.sort((a,b) => {
    if(Math.random() < .5) return -1
    else return 1
}),
f = x => 5*Math.tan(0.23*x);

//f(x) = 5*tan(0.23x), ceil(f(codeLength)) for maxHints
//  if max codeLength is 6 and min is 3 (otherwise, negative numbers are possible)
export function generateRiddle(options={}) {
    let {solution, codeLength, maxHints, base, debug, maxTries, nullFunc} = options
    
    if(debug) console.time('total')

    codeLength = codeLength || 3
    maxHints = maxHints && maxHints > 1 ? maxHints : 5 //Math.ceil(f(codeLength))
    base = base || 10
    debug = !!debug
    maxTries = maxTries || -1

    if(!solution || codeLength != solution.length)
        solution = '0'.repeat(codeLength).split('').map(e => Math.floor(Math.random()*base))
    
    const maxIncluded = solution.filter((e,i,arr) => arr.indexOf(e) == i).length,
    riddle = []

    let solveAttempt, x = 0

    if(debug) console.log(`solution: ${solution.join(', ')} | maxIncluded: ${maxIncluded}`)
    
    do {
        if(nullFunc && nullFunc()) {
            return null;
        }

        if(riddle.length >= maxHints)
            riddle.splice(0, riddle.length)

        const included = Math.floor(Math.random() * (maxIncluded + 1)), // 0 to maxIncluded,
        code = []

        let sorted = included == codeLength ? Math.floor(Math.random() * (included - 1)) // 0 to included - 2
        : Math.floor(Math.random() * (included + 1)) // 0 to included

        if(debug) console.log(`include ${included} sort ${sorted}`)

        if(debug) console.time('included')
        for(let i=0; i<included; i++) {
            let digit
            do {
                digit = randItem(solution)
            } while(code.includes(digit))

            code.push(digit)
        }
        if(debug) console.timeEnd('included')

        if(debug) console.time('nonincluded')
        for(let i=0; i<codeLength - included; i++) {
            let digit
            do {
                digit = Math.floor(Math.random() * base)
            } while(solution.includes(digit))

            code.push(digit)
        }
        if(debug) console.timeEnd('nonincluded')

        const getNumSorted = () => code.reduce((acc, digit) => (
            acc + (
                solution.indexOf(digit) == code.indexOf(digit) ? 1 : 0
            )
        ), 0)

        if(debug) console.time('shuffle')
        while(getNumSorted() != sorted) shuffle(code)
        if(debug) console.timeEnd('shuffle')

        riddle.push({code, included, sorted})
        solveAttempt = solve(riddle, base)

        x++
    } while(
        ( solveAttempt.length != 1 || !solveAttempt[0].every((e,i) => solution[i] == e) )
        && (maxTries == -1 ? true : x < maxTries)
    )


    if(debug) console.timeEnd('total')
    
    return riddle
}

const loc = import.meta.url;

const MAX_TRIES = 10;

onmessage = (ev) => {
    const riddle = generateRiddle(
        {
            ...ev.data.options,
            maxTries: MAX_TRIES,
            nullFunc: () => ev.data.resultObj.riddle
        }
    );
    
    if(riddle) {
        postMessage(riddle);
    }
    close();
}

export function generateRiddleMulti(options, split, resultObj, callback) {
    if(!window.Worker) return;
    delete resultObj.riddle;
    
    for(let i=0; i<split; i++) {
        const worker = new Worker(new URL(loc).href, {type:'module'});
        
        if(!resultObj.riddle)
            worker.postMessage({options, resultObj});
        
        worker.onmessage = (ev) => {
            if(!resultObj.riddle) {
                resultObj.riddle = ev.data;
                callback();
            }
        };
    }
}