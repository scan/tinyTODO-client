import * as React from "react";
import {
  graphql,
  createPaginationContainer,
  RelayPaginationProp,
} from "react-relay";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import type { ItemList_list } from "./__generated__/ItemList_list.graphql";

import Item from "~/components/Item";
import CreateItemButton from "~/components/CreateItemButton";

interface Props {
  list: ItemList_list;
  relay: RelayPaginationProp;
}

const ItemList: React.FC<Props> = ({ list, relay }) => {
  // Otherwise the re-render does not work when `isLoading` changes
  const isLoading = React.useMemo(() => relay.isLoading(), [relay]);

  const handleLoadMoreClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();

      relay.loadMore(5);
    },
    [relay]
  );

  const handleCreationSuccess = React.useCallback(() => {
    relay.refetchConnection(5);
  }, [relay]);

  return (
    <>
      <Grid container direction="column">
        <Grid item container spacing={2}>
          {list.items.edges.map((edge) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={edge.node.id}>
              <Item item={edge.node} />
            </Grid>
          ))}
        </Grid>
        {relay.hasMore() && (
          <Grid item>
            <Button
              fullWidth
              disabled={isLoading}
              onClick={handleLoadMoreClick}
            >
              Load More
            </Button>
          </Grid>
        )}
      </Grid>
      <CreateItemButton onSuccess={handleCreationSuccess} />
    </>
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
