import { connect, Dispatch } from 'react-redux';
import { ReduceNumberAction, Request } from './Actions';

import OperatingButton from './OperatingButton';

export default connect(null, (dispatch: Dispatch<Request>) => {
    return {
        onClick: () => {
            dispatch(ReduceNumberAction(1));
        }
    };
})(OperatingButton);