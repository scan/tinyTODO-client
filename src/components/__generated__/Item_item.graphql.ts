/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Item_item = {
    readonly title: string;
    readonly content: string | null;
    readonly " $refType": "Item_item";
};
export type Item_item$data = Item_item;
export type Item_item$key = {
    readonly " $data"?: Item_item$data;
    readonly " $fragmentRefs": FragmentRefs<"Item_item">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Item_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '5b967cdce905b4a265fc64b171e5cbcf';
export default node;
