export interface ResourceEndpoint {
    httpVerb: 'get' | 'post' | 'put' | 'delete'
    path: string
    methodName: string
}