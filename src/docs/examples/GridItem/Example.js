import React from "react";
import GridContainer from "im-react/GridContainer";
import GridItem from "im-react/GridItem";

export default function GridItemExample() {
  return (
    <div>
      <GridContainer>
        <GridItem lg="4">GridItem lg 4</GridItem>
        <GridItem lg="4">GridItem lg 4</GridItem>
        <GridItem lg="4">GridItem lg 4</GridItem>
      </GridContainer>
    </div>
  );
}
