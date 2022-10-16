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
    ]
}

const level2 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ]
}

const level3 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ]
}

const level4 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ]
}

const level5 = {
    displayedColumns: ['row', 'ands'],
    dataSource: [
        { row: 1 },
    ],
    answer: [
        { row: 1, ands: 1 },
    ]
}

const levels = [
    level1,
    level2,
    level3,
    level4,
    level5
]

function answerIsGood(input: TableElement[], answer: TableElement[]): boolean {
    return input.every((i, n) => i.ands == answer[n].ands && i.ors == answer[n].ors && i.nots == answer[n].nots && i.xors == answer[n].xors && i.nands == answer[n].nands);
}

export { levels, answerIsGood }