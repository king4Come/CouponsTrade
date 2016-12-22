/**
 * Author：liRenhao
 * Create Date：2016/12/20
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

// 服务器地址
export const ServerPath = {
    LOGIN: "login",
    LOGOUT: "logout",
    SIGN_UP: "signUp",
    GET_USER_INFO: "getUserInfo",
    UPDATE_USER_INFO: "updateUserInfo",
    CREATE_INVITE_CODE: "createInviteCode",
    VERIFY_PASSWORD: "verifyPassword",
    UPDATE_PASSWORD: "updatePassword",
    PUBLISH_COUPON: "publishCoupon",
    GET_COUPON_DETAILS: "getCouponDetails",
    GET_USER_COUPONS: "getUserCoupons",
    EDIT_USER_COUPON: "editUserCoupon",
    GET_ORDER_LIST: "getOrderList",
    GET_ORDER_INFO: "getOrderInfo",
    PAY: "pay",
    QUERY_COUPONS: "queryCoupons",
    SOLD_OUT_COUPON: "soldOutCoupon",
}

// 响应码
export const ResponseCode = {
    SUCCESS: "success",
    FAIL: "fail",
    TIMEOUT: "timeout"
}
