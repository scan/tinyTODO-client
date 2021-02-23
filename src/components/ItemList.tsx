import * as React from "react";
import { graphql, QueryRenderer } from "react-relay";

import environment from "~/relay";

const GQL_QUERY = graphql`
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
`;

const ItemList: React.FC = () => (
  <QueryRenderer
    environment={environment}
    query={GQL_QUERY}
    variables={{}}
    render={({ error, props }) => {
      if (error) {
        return <div>Error!</div>;
      }
      if (!props) {
        return <div>Loading...</div>;
      }
      return <pre>{JSON.stringify(props)}</pre>;
    }}
  />
);

ItemList.displayName = "ItemList";

export default ItemList;
