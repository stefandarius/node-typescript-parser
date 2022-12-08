import { AccessorDeclaration } from './AccessorDeclaration';
import { ClassLikeDeclaration, ExportableDeclaration, GenericDeclaration, TypedDeclaration } from './Declaration';
import { MethodDeclaration } from './MethodDeclaration';
import { PropertyDeclaration } from './PropertyDeclaration';

/**
 * Interface declaration that contains defined properties and methods.
 *
 * @export
 * @class InterfaceDeclaration
 * @implements {ExportableDeclaration}
 * @implements {GenericDeclaration}
 */
export class InterfaceDeclaration implements ClassLikeDeclaration, ExportableDeclaration, GenericDeclaration, TypedDeclaration {
    public accessors: AccessorDeclaration[] = [];
    public typeParameters: string[] | undefined;
    public properties: PropertyDeclaration[] = [];
    public methods: MethodDeclaration[] = [];
    public type: string | undefined = "interface";

    constructor(
        public name: string,
        public isExported: boolean,
        public start?: number,
        public end?: number,
    ) { }
}
