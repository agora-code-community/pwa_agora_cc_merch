/**
 * This a the porduct model, it holds all the properties of a
 * product. Its used in forms
 */
export class ProductModel {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: string,
        public pictures: any
    ){}
}