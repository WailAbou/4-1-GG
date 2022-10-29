import fx from 'fireworks'

interface TableElement {
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
    text: 'Je zit gevangen in <b>d</b>e meest high-tech gevangenis van het millenium! Maar geen zorgen ik help je ontstnappen🤫 Los de puzzel op en ontgrendel jouw gevangenis deur. Maar blijf op je hoede, want 1 verkeerde zet en de bewakers komen naar je toe!'
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
    text: 'Go<b>e</b>d gedaan, je bent voorbij je eerste obstakel. Maar nu is er geen weg terug, veel succes en wees op je hoede en blijf in de schaduw zodat de bewakers👮 je niet zien.'
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
    text: 'Probeer niet te veel geluid te maken want vergis je niet hoewel de koks gefo<b>c</b>used zijn op het eten zullen zeker geen moment twijfelen om de bewakers te roepen als ze je pakken.'
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
    text: 'Kru<b>i</b>p stiletjes door de ventilatieschachten en zoek een geschikte plek om er uit te gaan.'
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
    text: 'Je bent in een bak vol met kleren gevallen? Je hebt veel geluk🍀 dat dit er stond, sta o<b>p</b> en ga verder voordat de bewakers je opmerken.'
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
    text: 'Blijf in de sc<b>h</b>aduws want je bent niet de enige die wilt ontstnappen, mochten de andere gevangenen beseffen dat je ze niet kan helpen dan zullen ze tegen je keren.'
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
    text: 'Blijf zo doorgaan ik krijg signal<b>e</b>n binnen van de eindingang, nog even door!'
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
    text: 'No<b>r</b>male wijs een ingang voor bezoekers maar dit keer een kans om een eigen uitgang te vinden!'
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
    text: 'D<b>e</b> frisse lucht is vast verfrissend, maar blijf gefocused je bent er nog niet!'
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
    text: 'De bewake<b>r</b>s zitten op je hielen en kunnen elke moment je pakken, doe je best en laat dit allemaal niet voor niks zijn!'
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

function playFireworks(rounds: number) {
    function launch(delay: number) {
        let range: any = (n: number) => [...new Array(n)];

        setTimeout(() => {
            range(10).map(() =>
                fx({
                    x: Math.random() * window.innerWidth / 2 + window.innerWidth / 4,
                    y: Math.random() * window.innerHeight / 2 + window.innerHeight / 4,
                    colors: ['#cc3333', '#4CAF50', '#81C784']
                })
            )
        }, 1000 * delay);
    }

    Array.from({ length: rounds }, (_, i) => launch(i));
}

export { levels, answerIsGood, playFireworks, TableElement }