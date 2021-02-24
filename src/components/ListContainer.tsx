import * as React from "react";
import { QueryRenderer, graphql } from "react-relay";

import ItemList from "~/components/ItemList";

import environment from "~/relay";
import type { ListContainerQueryResponse } from "./__generated__/ListContainerQuery.graphql";

const ListContainer: React.FC = () => {
  const renderContent = ({ props }: { props?: ListContainerQueryResponse }) => {
    if (props) {
      return <ItemList list={props} />;
    }
    return null;
  };

  const query = graphql`
    query ListContainerQuery {
      ...ItemList_list
    }
  `;

  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{}}
      render={renderContent}
    />
  );
};

export default ListContainer;
