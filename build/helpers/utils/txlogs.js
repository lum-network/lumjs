"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRawLogs = exports.parseLogs = exports.parseLog = exports.parseEvent = exports.parseAttribute = void 0;
const commons_1 = require("./commons");
const parseAttribute = (input) => {
    if (!(0, commons_1.isNonNullObject)(input))
        throw new Error('Attribute must be a non-null object');
    const { key, value } = input;
    if (typeof key !== 'string' || !key)
        throw new Error("Attribute's key must be a non-empty string");
    if (typeof value !== 'string' && typeof value !== 'undefined') {
        throw new Error("Attribute's value must be a string or unset");
    }
    return {
        key: key,
        value: value || '',
    };
};
exports.parseAttribute = parseAttribute;
const parseEvent = (input) => {
    if (!(0, commons_1.isNonNullObject)(input))
        throw new Error('Event must be a non-null object');
    const { type, attributes } = input;
    if (typeof type !== 'string' || type === '') {
        throw new Error('Event type must be a non-empty string');
    }
    if (!Array.isArray(attributes))
        throw new Error("Event's attributes must be an array");
    return {
        type: type,
        attributes: attributes.map(exports.parseAttribute),
    };
};
exports.parseEvent = parseEvent;
const parseLog = (input) => {
    if (!(0, commons_1.isNonNullObject)(input))
        throw new Error('Log must be a non-null object');
    const { msg_index, log, events } = input;
    if (typeof msg_index !== 'number')
        throw new Error("Log's msg_index must be a number");
    if (typeof log !== 'string')
        throw new Error("Log's log must be a string");
    if (!Array.isArray(events))
        throw new Error("Log's events must be an array");
    return {
        msg_index: msg_index,
        log: log,
        events: events.map(exports.parseEvent),
    };
};
exports.parseLog = parseLog;
const parseLogs = (input) => {
    if (!Array.isArray(input))
        throw new Error('Logs must be an array');
    return input.map(exports.parseLog);
};
exports.parseLogs = parseLogs;
/**
 * Parse raw transaction logs into human readable format
 *
 * @param input transaction log (for tx returned by the client you can use tx.result.log)
 */
const parseRawLogs = (input = '[]') => {
    try {
        const logsToParse = JSON.parse(input).map(({ events }, i) => ({
            msg_index: i,
            events,
            log: '',
        }));
        return (0, exports.parseLogs)(logsToParse);
    }
    catch (e) {
        // Transactions that failed only contain a string error message in the logs
        return [
            {
                msg_index: 0,
                events: [],
                log: input,
            },
        ];
    }
};
exports.parseRawLogs = parseRawLogs;
//# sourceMappingURL=txlogs.js.map