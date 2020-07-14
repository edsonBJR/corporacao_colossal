export class NotFoundError extends Error {
    constructor(message, ...params) {
        super({ name: 'NotFoundError' }, message, ...params);
    }
}

export class ForbiddenError extends Error {
    constructor(message, ...params) {
        super({ name: 'ForbiddenError' }, message, ...params);
    }
}

export class InternalServerError extends Error {
    constructor(message, ...params) {
        super({ name: 'InternalServerError' }, message, ...params);
    }
}