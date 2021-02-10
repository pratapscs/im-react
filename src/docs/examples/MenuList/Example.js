import React, { Fragment } from 'react';
import MenuList from 'im-react/MenuList';

export default function MenuListExample() {
   
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        alert("Clicked!")
    };


    return (
        <Fragment>
            <MenuList  width="25%"  id="1" title="ZKTeco + Team"  desc="Membership Application" time="16:00" 
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            />

            <MenuList width="25%"  id="2" title="Miracy" desc="Miracy invited Zhong Wenkang to join the.." time="15:35" 
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            />
            <MenuList  width="25%"  id="3" title="Lucy" desc="Lucy invited Zhong Wenkang to join the..." time="4:00" 
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            />

            <MenuList  width="25%"  id="4" title="Inform News" desc="Your leave application has beed..." time="Yesterday" 
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}/>

            <MenuList width="25%"  id="5" title="Target Assistant" desc="Linda has assigned you a goal." time="September 9th" 
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}/>

            <MenuList  width="25%"  id="6" title="Visitor News" desc="The visitor submitted a face ..." time="September 8th" 
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}/>
        </Fragment>
    );
}
