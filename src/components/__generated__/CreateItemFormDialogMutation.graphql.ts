/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateItemFormDialogMutationVariables = {
    title: string;
    content?: string | null;
};
export type CreateItemFormDialogMutationResponse = {
    readonly addItem: {
        readonly id: string;
    } | null;
};
export type CreateItemFormDialogMutation = {
    readonly response: CreateItemFormDialogMutationResponse;
    readonly variables: CreateItemFormDialogMutationVariables;
};



/*
mutation CreateItemFormDialogMutation(
  $title: String!
  $content: String
) {
  addItem(item: {title: $title, content: $content}) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "content",
            "variableName": "content"
          },
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title"
          }
        ],
        "kind": "ObjectValue",
        "name": "item"
      }
    ],
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "addItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateItemFormDialogMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateItemFormDialogMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e98c860e429ed0631ba1af6a272f3c71",
    "id": null,
    "metadata": {},
    "name": "CreateItemFormDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateItemFormDialogMutation(\n  $title: String!\n  $content: String\n) {\n  addItem(item: {title: $title, content: $content}) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f48160330178d450cc50575549be4be0';
export default node;
