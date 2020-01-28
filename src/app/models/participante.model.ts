export class Participante {
    constructor(
        public nombre?: string,
        public email?: string,
        public aciertos?: string,
        public estado?: boolean,
        public quiz?: string,
        public _id?: string
    ) { }
}