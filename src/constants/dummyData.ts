import { Graph, Variable, VariableCategory } from "./types";

const dummyAlerts = [
    "The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
    "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles."
]

const dummyTopNav = [
    "Charging Stations",
    "Fleet Sizing",
    "Parking"
]

const dummyGraphData = [
    {
        date: "Apr",
        val: 24
    },
    {
        date: "May",
        val: 47
    },
    {
        date: "Jun",
        val: 40
    },
    {
        date: "Jul",
        val: 84
    },
    {
        date: "Aug",
        val: 60
    },
    {
        date: "Sept",
        val: 56
    }
];

const dummyGraphData2 = [
    {
        date: "Apr",
        val: 100
    },
    {
        date: "May",
        val: 20
    },
    {
        date: "Jun",
        val: 45
    },
    {
        date: "Jul",
        val: 24
    },
    {
        date: "Aug",
        val: 39
    },
    {
        date: "Sept",
        val: 22
    }
];

const graphs: Graph = {
    "CO2 Distribution": dummyGraphData,
    "Variable 1": dummyGraphData2,
}

const dummyIndicators = [
    {
        header: "Infrastructure Units",
        info: "This describes variable two and what the shown data means.",
        val: "$421.07"
    },
    {
        header: "Charging Growth",
        info: "This describes variable two and what the shown data means.",
        val: "33.07"
    },
    {
        header: "Localization Change",
        info: "This describes variable two and what the shown data means.",
        val: "21.9%"
    },
    {
        header: "Fleet Growth",
        info: "This describes variable two and what the shown data means.",
        val: "7.03%"
    }
];

const dummyVariables: VariableCategory[] = [
    {
        categoryName: "Variable category 1",
        variables: [
            "Carbon 1",
            "CO2 Distribution",
            "Fleet sizing"
        ]
    },
    {
        categoryName: "Variable category 2",
        variables: [
            "Parking Rate",
            "Border Rate",
            "Request Rate",
            "Fleet sizing"
        ]
    },
    {
        categoryName: "Variable category 3",
        variables: [
            "Variable 1",
            "Variable 2",
            "Variable 3",
            "Variable 4",
            "Variable 5",
        ]
    },
]

const dummyPrimary: VariableCategory = {
    categoryName: "Primary variables",
    variables: [
        "Variable 1",
        "Variable 2",
        "Variable 3"
    ]
}

const dummySecondary: VariableCategory = {
    categoryName: "Secondary variables",
    variables: [
        "Variable 4",
        "Variable 5",
    ]
}

const dummySelect = [
    "CO2 Distribution",
    "Variable 1",
]

const dummyVariableDesc: Variable = {
    "CO2 Distribution": {
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, est id volutpat sagittis,",
        selected: true
    },
    "Variable 1": {
        desc: "Phasellus mollis lacinia vulputate. Aliquam venenatis malesuada pellentesque. Proin porta blandit turpis. Proin non fermentum mauris.",
        selected: true
    },
    "Variable 2": {
        desc: "Integer sit amet ipsum vitae elit ornare congue. Duis pretium orci ex, nec pellentesque enim ultricies maximus.  ",
        selected: false
    },
    "Variable 3": {
        desc: "Cras sit amet arcu vestibulum velit cursus auctor. Ut faucibus ex vitae dolor elementum pellentesque.",
        selected: false
    },
    "Variable 4": {
        desc: "Phasellus mollis lacinia vulputate. Aliquam venenatis malesuada pellentesque. Proin porta blandit turpis. Proin non fermentum mauris.",
        selected: false
    },
    "Variable 5 ": {
        desc: "Phasellus mollis lacinia vulputate. Aliquam venenatis malesuada pellentesque. Proin porta blandit turpis. Proin non fermentum mauris.",
        selected: false
    },
    "Carbon 1": {
        desc: " Donec vehicula ac eros vel dictum. Vestibulum consequat id massa finibus mollis. In sed maximus diam. ",
        selected: false
    },
    "Parking Rate": {
        desc: "Cras sit amet arcu vestibulum velit cursus auctor. Ut faucibus ex vitae dolor elementum pellentesque.",
        selected: false
    },
    "Border Rate": {
        desc: " Donec vehicula ac eros vel dictum. Vestibulum consequat id massa finibus mollis. In sed maximus diam. ",
        selected: false
    },
    "Fleet sizing": {
        desc: "Vivamus vitae neque ut ante viverra congue a faucibus mauris. Praesent eget laoreet lacus, vel varius magna.",
        selected: false
    },
    "Request Rate": {
        desc: "Sed feugiat blandit lacus at euismod. Fusce quis lorem ac metus consectetur feugiat.",
        selected: false
    },
    "Not Found": {
        desc: "Sorry, no data found for this variable!",
        selected: false
    }
}

const DATA = {
    dummyAlerts,
    dummyTopNav,
    graphs,
    dummyIndicators,
    dummyVariables,
    dummyPrimary,
    dummySecondary,
    dummySelect,
    dummyVariableDesc
}

export { DATA }