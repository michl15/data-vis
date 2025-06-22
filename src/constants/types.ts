type VariableCategory = {
    categoryName: string,
    variables: string[]
}
type VarData = {
    selected: boolean;
    desc: string;
}
type Variable = {
    [name: string]: VarData;
}


type GraphData = {
    date: string,
    val: number
}

type Graph = {
    [name: string]: GraphData[]
}

export type { VariableCategory, Variable, VarData, Graph }