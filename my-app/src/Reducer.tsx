import { Request, ActionType } from './Actions';
import Store from './Store';

export default function Reducer(store: Store, request: Request): Store {
    switch (request.type) {
        case ActionType.Add:
            return { ...store, value: store.value + request.value };
        case ActionType.Reduce:
            return { ...store, value: store.value - request.value };
        case ActionType.Reset:
            return { ...store, value: request.value };
        default:
            return store;
    }
}