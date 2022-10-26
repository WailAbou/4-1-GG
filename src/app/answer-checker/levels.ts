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
    text: 'Je zit gevangen in de meest high-tech gevangenis van het millenium! Maa<b>r</b> geen zo<b>r</b>gen ik help je ontstnappen🤫 Los de puzzel op en ontg<b>r</b>endel jouw gevangenis deur. Maar blijf op je hoede, want 1 ve<b>r</b>kee<b>r</b>de zet en de bewake<b>r</b>s komen naa<b>r</b> je toe!'
}

const level2 = {
    displayedColumns: ['row', 'nands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, nands: 1 },
    ],
    title: 'Level 2: GANG',
    text: 'Goed gedaan, je bent voorbij je eerste obstakel. Maar nu is er geen weg terug, veel succes en wees op je hoede en blijf in de schaduw zodat de bewakers👮 je niet zien.'
}

const level3 = {
    displayedColumns: ['row', 'ands', 'nands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1, nands: 1 },
    ],
    title: 'Level 3: KANTINE',
    text: 'Probeer niet te veel geluid te maken want vergis je niet hoewel de koks gefocused zijn op het eten zullen zeker geen moment twijfelen om de bewakers te roepen als ze je pakken.'
}

const level4 = {
    displayedColumns: ['row', 'ors'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ors: 2 },
    ],
    title: 'Level 4: VENTILATIESCHACHTEN',
    text: 'Kruip stiletjes door de ventilatieschachten en zoek een geschikte plek om er uit te gaan.'
}

const level5 = {
    displayedColumns: ['row', 'ands', 'nands', 'ors'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1, nands: 1, ors: 1 },
    ],
    title: 'Level 5: WASSERIJ',
    text: 'Je bent in een bak vol met kleren gevallen? Je hebt veel geluk🍀 dat dit er stond, sta op en ga verder voordat de bewakers je opmerken.'
}

const level6 = {
    displayedColumns: ['row', 'xors'],
    dataSource: [
        { row: 1 },
        { row: 2 },
        { row: 3 },
    ],
    answer: [
        { row: 1, xors: 2 },
        { row: 2, xors: 2 },
        { row: 3, xors: 2 },
    ],
    title: 'Level 6: CELLENBLOK',
    text: 'Blijf in de schaduws want je bent niet de enige die wilt ontstnappen, mochten de andere gevangenen beseffen dat je ze niet kan helpen dan zullen ze tegen je keren.'
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
    text: 'Blijf zo doorgaan ik krijg signalen binnen van de eindingang, nog even door!'
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
    text: 'Normale wijs een ingang voor bezoekers maar dit keer een kans om een eigen uitgang te vinden!'
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
    text: 'De frisse lucht is vast verfrissend, maar blijf gefocused je bent er nog niet!'
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