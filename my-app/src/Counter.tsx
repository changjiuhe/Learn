import * as React from 'react';
import { connect } from 'react-redux';
import Store from './Store';

export interface Props {
    value: number;
}

class Counter extends React.Component<Props, object> {
    render() {
        const { value } = this.props;
        return (
            <div>{value}</div>
        );
    }
}

function mapStoreStateToProps({ value }: Store) {
    return {
        value: value
    };
}

export default connect(mapStoreStateToProps)(Counter);
