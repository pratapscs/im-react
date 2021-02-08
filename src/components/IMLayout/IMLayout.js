import React, { Fragment } from 'react';
import ToolBarContainer from '../ToolBarContainer';
import Layout from '../Layout';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import IMMainContainer from '../IMMainContainer';

const IMLayout = ({ children }) => {
    return (
        <Fragment>
            <Layout>
                <ToolBarContainer></ToolBarContainer>
                <GridContainer>
                    <GridItem xs="12" sm="12" md="12" lg="12">
                        <IMMainContainer>
                            {children}
                        </IMMainContainer>
                    </GridItem>
                </GridContainer>
            </Layout>
        </Fragment>
    );
}

export default IMLayout;
