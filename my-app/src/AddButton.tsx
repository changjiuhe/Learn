import { connect, Dispatch } from 'react-redux';
import { AddNumberAction, Request } from './Actions';

import OperatingButton from './OperatingButton';

export default connect(null, (dispatch: Dispatch<Request>) => {
    return {
        onClick: () => {
            dispatch(AddNumberAction(1));
        }
    };
})(OperatingButton);