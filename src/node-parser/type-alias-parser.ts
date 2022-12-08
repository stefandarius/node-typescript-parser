import { TypeAliasDeclaration, Identifier } from 'typescript';

import { TypeAliasDeclaration as TshType } from '../declarations/TypeAliasDeclaration';
import { Resource } from '../resources/Resource';
import {
    getNodeType,
    isNodeExported,
} from './parse-utilities';

/**
 * Parses a type alias into the declaration.
 *
 * @export
 * @param {Resource} resource
 * @param {TypeAliasDeclaration} node
 */
export function parseTypeAlias(resource: Resource, node: TypeAliasDeclaration): void {
    const typeDeclaration = new TshType(node.name.text, isNodeExported(node), node.getStart(), node.getEnd());

    if (node.typeParameters) {
        node.typeParameters.forEach((o) => {
            //if (isPropertySignature(o)) {
                typeDeclaration.typeParameters.push((o.name as Identifier).text + ": " + getNodeType(o.constraint)
                    // new PropertyDeclaration(
                    //     (o.name as Identifier).text,
                    //     DeclarationVisibility.Public,
                    //     getNodeType(o.type),
                    //     !!o.questionToken,
                    //     containsModifier(o, SyntaxKind.StaticKeyword),
                    //     o.getStart(),
                    //     o.getEnd(),
                    // ),
                );
            //}
        });
    }

    resource.declarations.push(typeDeclaration);
}
