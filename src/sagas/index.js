/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {takeEvery} from 'redux-saga'
import {
    signUpRequest, loginRequest,
    logoutRequest, getUserInfoRequest,
    getOrderListRequest, getOrderInfoRequest, payRequest
} from '../action'
import {
    signUpAsync, loginAsync,
    logoutAsync, getUserInfoAsync,
    fetchOrderList, fetchOrderInfo, fetchPay
} from './async'

export function* watchSignUpRequest() {
    yield* takeEvery(signUpRequest.getType(), signUpAsync)
}

export function* watchLoginRequest() {
    yield* takeEvery(loginRequest.getType(), loginAsync)
}

export function* watchLogoutRequest() {
    yield* takeEvery(logoutRequest.getType(), logoutAsync)
}

export function* watchGetUserInfoRequest() {
    yield* takeEvery(getUserInfoRequest.getType(), getUserInfoAsync)
}

export function* watchGetOrderListRequest() {
    yield takeEvery(getOrderListRequest.getType(), fetchOrderList)
}

export function* watchGetOrderInfoRequest() {
    yield takeEvery(getOrderInfoRequest.getType(), fetchOrderInfo)
}

export function* watchPay() {
    yield takeEvery(payRequest.getType(), fetchPay)
}

export default function* sagas() {
    yield [
        watchSignUpRequest(),
        watchLoginRequest(),
        watchLogoutRequest(),
        watchGetUserInfoRequest(),
        watchGetOrderListRequest(),
        watchGetOrderInfoRequest(),
        watchPay()
    ]
}