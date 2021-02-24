import * as React from "react";
import { graphql, createPaginationContainer } from "react-relay";

import Grid from "@material-ui/core/Grid";

import type { ItemList_list } from "./__generated__/ItemList_list.graphql";

import Item from "~/components/Item";

interface Props {
  list: ItemList_list;
}

const ItemList: React.FC<Props> = ({ list }) => {
  return (
    <Grid container spacing={2}>
      {list.items.edges.map((edge) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={edge.node.id}>
          <Item item={edge.node} />
        </Grid>
      ))}
    </Grid>
  );
};

ItemList.displayName = "ItemList";

export default createPaginationContainer(
  ItemList,
  {
    list: graphql`
      fragment ItemList_list on Query
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 5 }
        cursor: { type: "Cursor" }
      ) {
        items(first: $count, after: $cursor)
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
        count: totalCount,
      };
    },
    query: graphql`
      query ItemListPaginationQuery($count: Int!, $cursor: Cursor) {
        ...ItemList_list @arguments(count: $count, cursor: $cursor)
      }
    `,
  }
);
