import _ from 'lodash';
import React from 'react';
import Pagination from 'im-react/Pagination';

/** Example of pagination */

function Example() {
    const items = _.range(1, 151).map(i => {
        return {
            id: i,
            name: `Item ${i}`
        };
    });

    function onChangePage(pageOfItems) {
        // this.setState({ pageOfItems: pageOfItems });
        console.log(pageOfItems);
    }

    return (
        <div>
            {/* <List items={this.state.pageOfItems} */}
            <Pagination items={items} onChangePage={onChangePage} pageSize={5} numPagesToShow={5} />
        </div>
    );
}

export default Example;
