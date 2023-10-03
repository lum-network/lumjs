import { Log, LogEvent, LogAttribute } from '../types';
export declare const parseAttribute: (input: unknown) => LogAttribute;
export declare const parseEvent: (input: unknown) => LogEvent;
export declare const parseLog: (input: unknown) => Log;
export declare const parseLogs: (input: unknown) => readonly Log[];
/**
 * Parse raw transaction logs into human readable format
 *
 * @param input transaction log (for tx returned by the client you can use tx.result.log)
 */
export declare const parseRawLogs: (input?: string) => readonly Log[];
