import {AxiosInstance, AxiosResponse} from "axios";
import {Headers} from "./SignalWireRESTClientTypes";

export interface PagedResponse<T> {
    data: T[];
    hasNextPage: boolean;
    nextPage: () => Promise<PagedResponse<T>>;
    nextPageUrl?: string;
    hasPreviousPage: boolean;
    previousPage: () => Promise<PagedResponse<T>>;
    previousPageUrl?: string;
}

type MakePagedResponseOptions<T> = {
    data: T[];
    nextPageUrl?: string;
    previousPageUrl?: string;
    fetchPage: (url: string) => Promise<AxiosResponse<any>>;
    extractData: (response: AxiosResponse<any>) => T[];
    extractNextPageUrl: (response: AxiosResponse<any>) => string | undefined;
    extractPreviousPageUrl: (response: AxiosResponse<any>) => string | undefined;
}

export function makePagedResponse<T>(options: MakePagedResponseOptions<T>): PagedResponse<T> {
    const {data, nextPageUrl, previousPageUrl, fetchPage, extractData, extractNextPageUrl,
        extractPreviousPageUrl} = options;

    return {
        data,
        hasNextPage: !!nextPageUrl,
        nextPage: async () => {
            if (!nextPageUrl) throw new Error("No next page");
            const response = await fetchPage(nextPageUrl);
            return makePagedResponse({
                data: extractData(response),
                nextPageUrl: extractNextPageUrl(response),
                previousPageUrl: extractPreviousPageUrl(response),
                fetchPage,
                extractData,
                extractNextPageUrl,
                extractPreviousPageUrl
            });
        },
        nextPageUrl,
        hasPreviousPage: !!previousPageUrl,
        previousPage: async () => {
            if (!previousPageUrl) throw new Error("No previous page");
            const response = await fetchPage(previousPageUrl);
            return makePagedResponse({
                data: extractData(response),
                nextPageUrl: extractNextPageUrl(response),
                previousPageUrl: extractPreviousPageUrl(response),
                fetchPage,
                extractData,
                extractNextPageUrl,
                extractPreviousPageUrl
            })
        },
        previousPageUrl
    }
}

export function defaultMakePagedResponse<T>(json: any, axiosInstance: AxiosInstance, headers: Headers,
                                            deserializer: (item: any) => T, baseUrl: string): PagedResponse<T>  {
    return makePagedResponse({
        data: json.data.map(deserializer),
        nextPageUrl: json.links?.next,
        previousPageUrl: json.links?.previous,
        fetchPage: async (fetchUrl: string) =>
            axiosInstance.request({
                url: fetchUrl,
                method: 'GET',
                headers
            }),
        extractData: (response: AxiosResponse<any>) => response.data.data.map(deserializer),
        extractNextPageUrl: (response: AxiosResponse<any>) => stripBaseUrl(response.data.links?.next, baseUrl),
        extractPreviousPageUrl: (response: AxiosResponse<any>) => stripBaseUrl(response.data.links?.previous, baseUrl)
    })
}

function stripBaseUrl(url: string, baseUrl: string): string {
    if (url.startsWith(baseUrl)) {
        return url.substring(baseUrl.length);
    }
    return url;
}