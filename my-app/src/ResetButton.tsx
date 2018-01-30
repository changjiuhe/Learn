import { connect, Dispatch } from 'react-redux';
import { ResetNumberAction, Request } from './Actions';

import OperatingButton from './OperatingButton';

export default connect(null, (dispatch: Dispatch<Request>) => {
    return {
        onClick: () => {
            dispatch(ResetNumberAction(0));
        }
    };
})(OperatingButton);