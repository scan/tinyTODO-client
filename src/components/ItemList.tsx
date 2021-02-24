import * as React from "react";
import { graphql, createPaginationContainer } from "react-relay";

import type { ItemList_list } from "./__generated__/ItemList_list.graphql";

interface Props {
  list: ItemList_list
}

const ItemList: React.FC<Props> = () => {
  return <></>;
};

ItemList.displayName = "ItemList";

export default createPaginationContainer(
  ItemList,
  {
    list: graphql`
      fragment ItemList_list on Query
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "Cursor" }
      ) {
        items(first: 0, limit: $count, after: $cursor)
          @connection(key: "ItemList_items") {
          edges {
            node {
              id
              ...Item_item
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getVariables(_props, { count, cursor }, _fragmentVariables) {
      return {
        count,
        cursor,
      };
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      }
    },
    query: graphql`
      query ItemListPaginationQuery($count: Int!, $cursor: Cursor) {
        ...ItemList_list @arguments(count: $count, cursor: $cursor)
      }
    `,
  }
);
