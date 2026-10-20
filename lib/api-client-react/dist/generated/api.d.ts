import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ApiError, HealthStatus, OrderNotificationInput, OrderNotificationResult } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSendOrderNotificationUrl: () => string;
/**
 * Sends a customer order to the configured FlowOS inbox.
 * @summary Send an order notification by email
 */
export declare const sendOrderNotification: (orderNotificationInput: OrderNotificationInput, options?: Parameters<typeof customFetch>[1]) => Promise<OrderNotificationResult>;
export declare const getSendOrderNotificationMutationKey: () => readonly ["sendOrderNotification"];
export declare const getSendOrderNotificationMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendOrderNotification>>, TError, SendOrderNotificationMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendOrderNotification>>, TError, SendOrderNotificationMutationVariables, TContext>;
export type SendOrderNotificationMutationResult = NonNullable<Awaited<ReturnType<typeof sendOrderNotification>>>;
export type SendOrderNotificationMutationBody = BodyType<OrderNotificationInput>;
export type SendOrderNotificationMutationError = ErrorType<ApiError>;
export type SendOrderNotificationMutationVariables = {
    data: BodyType<OrderNotificationInput>;
};
/**
* @summary Send an order notification by email
*/
export declare const useSendOrderNotification: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendOrderNotification>>, TError, SendOrderNotificationMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendOrderNotification>>, TError, SendOrderNotificationMutationVariables, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map