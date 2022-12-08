import { TypeAliasDeclaration, SyntaxKind } from 'typescript';

import { DeclarationVisibility } from '../declarations/DeclarationVisibility';
import { DefaultDeclaration } from '../declarations/DefaultDeclaration';
import { TypeAliasDeclaration as TshType } from '../declarations/TypeAliasDeclaration';
import { MethodDeclaration } from '../declarations/MethodDeclaration';
import { PropertyDeclaration } from '../declarations/PropertyDeclaration';
import { Resource } from '../resources/Resource';
import { isMethodSignature, isPropertySignature } from '../type-guards/TypescriptGuards';
import { parseMethodParams } from './function-parser';
import {
    containsModifier,
    getDefaultResourceIdentifier,
    getNodeType,
    isNodeDefaultExported,
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

    if (node.members) {
        node.members.forEach((o) => {
            if (isPropertySignature(o)) {
                typeDeclaration.properties.push(
                    new PropertyDeclaration(
                        (o.name as Identifier).text,
                        DeclarationVisibility.Public,
                        getNodeType(o.type),
                        !!o.questionToken,
                        containsModifier(o, SyntaxKind.StaticKeyword),
                        o.getStart(),
                        o.getEnd(),
                    ),
                );
            }
        });
    }

    resource.declarations.push(interfaceDeclaration);
}
