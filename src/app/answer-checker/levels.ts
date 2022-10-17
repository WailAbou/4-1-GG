export interface TableElement {
    row: number;
    ands?: number;
    ors?: number;
    nots?: number;
    xors?: number;
    nands?: number;
}

const level1 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ],
    title: 'Level 1: GEVANGENISCEL',
    text: 'Je zit gevangen in de meest high-tech gevangenis van het millenium! Maa<b>R</b> geen zo<b>R</b>gen ik help je ontstnappen🤫 Los de puzzel op en ontg<b>R</b>endel jouw gevangenis deur. Maar blijf op je hoede, want 1 ve<b>R</b>kee<b>R</b>de zet en de bewake<b>R</b>s komen naa<b>R</b> je toe!'
}

const level2 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ],
    title: 'Level 2: GANG',
    text: 'Goed gedaan, je bent voorbij je eerste obstakel. Maar nu is er geen weg terug, veel succes en wees op je hoede en blijf in de schaduw zodat de bewakers👮 je niet zien.'
}

const level3 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ],
    title: 'Level 3: KANTINE',
    text: ''
}

const level4 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ],
    title: 'Level 4: VENTILATIESCHACHTEN',
    text: 'Kruip stiletjes door de ventilatieschachten en zoek een geschikte plek om er uit te gaan.'
}

const level5 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ],
    title: 'Level 5: WASSERIJ',
    text: 'Je bent in een bak vol met kleren gevallen? Je hebt veel geluk🍀 dat dit er stond, sta op en ga verder voordat de bewakers je opmerken.'
}

const level6 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ],
    title: 'Level 6: CELLENBLOK',
    text: ''
}

const level7 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ],
    title: 'Level 7: CELLENBLOK',
    text: ''
}

const level8 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ],
    title: 'Level 8: BEZOEKERS INGANG',
    text: ''
}

const level9 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ],
    title: 'Level 9: LUCHTPLAATS',
    text: ''
}

const level10 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ],
    title: 'Level 10: NOODUITGANG',
    text: 'De bewakers zitten op je hielen en kunnen elke moment je pakken, doe je best en laat dit allemaal niet voor niks zijn!'
}

const levels = [
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
    level10
]

function answerIsGood(input: TableElement[], answer: TableElement[]): boolean {
    return input.every((i, n) => i.ands == answer[n].ands && i.ors == answer[n].ors && i.nots == answer[n].nots && i.xors == answer[n].xors && i.nands == answer[n].nands);
}

export { levels, answerIsGood }