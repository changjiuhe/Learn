export enum ActionType {
    Add,
    Reduce,
    Reset
}

export interface Request {
    type: ActionType;
    value: number;
}

export function AddNumberAction(value: number): Request {
    return {
        type: ActionType.Add,
        value: value
    };
}

export function ReduceNumberAction(value: number): Request {
    return {
        type: ActionType.Reduce,
        value: value
    };
}

export function ResetNumberAction(value: number): Request {
    return {
        type: ActionType.Reset,
        value: value
    };
}