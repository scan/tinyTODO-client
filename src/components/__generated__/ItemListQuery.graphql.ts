/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ItemListQueryVariables = {};
export type ItemListQueryResponse = {
    readonly items: {
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly hasPreviousPage: boolean;
            readonly endCursor: unknown;
            readonly startCursor: unknown;
        };
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly title: string;
            };
            readonly cursor: unknown;
        }>;
    };
};
export type ItemListQuery = {
    readonly response: ItemListQueryResponse;
    readonly variables: ItemListQueryVariables;
};



/*
query ItemListQuery {
  items(first: 0) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      node {
        id
        title
      }
      cursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 0
      }
    ],
    "concreteType": "ItemConnection",
    "kind": "LinkedField",
    "name": "items",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PageInfo",
        "kind": "LinkedField",
        "name": "pageInfo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasNextPage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasPreviousPage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endCursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "startCursor",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ItemEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "items(first:0)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e66d0f9c976f6024efd0393c6d31731c",
    "id": null,
    "metadata": {},
    "name": "ItemListQuery",
    "operationKind": "query",
    "text": "query ItemListQuery {\n  items(first: 0) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      endCursor\n      startCursor\n    }\n    edges {\n      node {\n        id\n        title\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7f38c1db28971d6b09ffc771172c0d6e';
export default node;
