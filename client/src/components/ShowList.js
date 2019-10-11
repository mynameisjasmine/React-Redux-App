import React from 'react';
import { connect } from 'react-redux';
 
const ShowList = props => {
    return (
    <div>

    </div>
    )
};

const mapStateToProps = state => {
return {
 data: state.data
};
};

export default connect(mapStateToProps, {})(ShowList);