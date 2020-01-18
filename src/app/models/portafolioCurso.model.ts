export class PortafolioCurso {
    constructor(
        public imagen: string,
        public requisitos: string,
        public incluye: string,
        public ciclos: [{
            curso: string,
            informacion: string
        }],
        public _id?: string
    ) { }
}
