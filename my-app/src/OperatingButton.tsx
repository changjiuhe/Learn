import * as React from 'react';

export interface Props {
    title: string;
    onClick: () => void;
}

export default class OperatingButton extends React.Component<Props, object> {
    render() {
        const { title, onClick } = this.props;
        return (
            <button onClick={onClick}>{title}</button>
        );
    }
}