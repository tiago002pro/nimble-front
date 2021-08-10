export interface Conta {
    id?: any,
    cliente?: any,
    contaTipo: String,
    agencia: any,
    conta: any,
    saldo: DoubleRange,
    chequeEspecial: DoubleRange,
    juros: DoubleRange
}