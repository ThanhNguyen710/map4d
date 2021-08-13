import '../../../styles/route.css';
import LeftMenu from './LeftMenu';
import OptionAlerts from './OptionForm';
import TabsMap from './TabsMaps';
import React from 'react';



function PageRoute(props) {

    return (
        <div className="body">
            <LeftMenu />
            <OptionAlerts />
            <TabsMap />
        </div>
    );
}

export default PageRoute;