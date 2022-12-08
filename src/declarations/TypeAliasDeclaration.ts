import { ExportableDeclaration, GenericDeclaration } from './Declaration';

/**
 * Alias declaration that can be exported. Is used to defined types.
 * (e.g. type Foobar = { name: string };)
 *
 * @export
 * @class TypeAliasDeclaration
 * @implements {ExportableDeclaration}
 */
export class TypeAliasDeclaration implements ExportableDeclaration, GenericDeclaration {
    public typeParameters: string[] = [];
    //public type: string | undefined = "type";
    constructor(
        public name: string,
        public isExported: boolean,
        public start?: number,
        public end?: number,
    ) { }
}
