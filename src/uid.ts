const uuidv1 = require('uuid/v1')
const uuidv5 = require('uuid/v5')

// [TEMP] 내 앱에 대한 namespace uuid 가 필요함
const uuid_namespace : string = '1b671a64-40d5-491e-99b0-da01ff1f3341'
export function uuid_ts (): string {
    return uuidv1()
}
export function uuid_obje (objeName : string): string {
    return uuidv5(objeName, uuid_namespace)
}
