export type Prato = {
    id: number
    nome: string
    descricao: string
    foto: string
    porcao: string
    preco: number
}

export type Restaurante = {
    id: number
    titulo: string
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Prato[]
}