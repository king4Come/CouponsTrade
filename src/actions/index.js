import {createAction} from 'redux-act'
import * as Const from '../constants'

export const onload
	= createAction(Const.ONLOAD)
export const unload
	= createAction(Const.UNLOAD)
export const showDialog
	= createAction(Const.SHOW_DIALOG)
export const hideDialog
	= createAction(Const.HIDE_DIALOG)
export const signUpRequest
	= createAction(Const.SIGN_UP_REQUEST)
export const loginRequest
	= createAction(Const.LOGIN_REQUEST)
export const logoutRequest
	= createAction(Const.LOGOUT_REQUEST)
export const login
	= createAction(Const.LOGIN)
export const logout
	= createAction(Const.LOGOUT)
export const getUserInfoRequest
	= createAction(Const.GET_USER_INFO_REQUEST)
export const updateUserInfoRequest
	= createAction(Const.UPDATE_USER_INFO_REQUEST)
export const updateUserInfo
	= createAction(Const.UPDATE_USER_INFO)
export const createInviteCodeRequest
	= createAction(Const.CREATE_INVITE_CODE_REQUEST)
export const updateInviteCode
	= createAction(Const.UPDATE_INVITE_CODE)
export const verifyPasswordRequest
	= createAction(Const.VERIFY_PASSWORD_REQUEST)
export const updatePasswordRequest
	= createAction(Const.UPDATE_PASSWORD_REQUEST)
export const publishCouponRequest
	= createAction(Const.PUBLISH_COUPON_REQUEST)
export const queryCouponsRequest
	= createAction(Const.QUERY_COUPONS_REQUEST)
export const setCouponPage
	= createAction(Const.SET_COUPON_PAGE)
export const setCoupons
	= createAction(Const.SET_COUPONS)
export const insertCoupons
	= createAction(Const.INSERT_COUPONS)
export const getCouponDetailsRequest
	= createAction(Const.GET_COUPON_DETAILS_REQUEST)
export const insertCouponDetails
	= createAction(Const.INSERT_COUPON_DETAILS)
export const getUserCouponsRequest
	= createAction(Const.GET_USER_COUPONS_REQUEST)
export const setUserCouponPage
	= createAction(Const.SET_USER_COUPON_PAGE)
export const setUserCoupons
	= createAction(Const.SET_USER_COUPONS)
export const insertUserCoupons
	= createAction(Const.INSERT_USER_COUPONS)
export const insertUserCouponDetails
	= createAction(Const.INSERT_USER_COUPON_DETAILS)
export const soldOutCouponRequest
	= createAction(Const.SOLD_OUT_COUPON_REQUEST)
export const updateSoldOutCoupon
	= createAction(Const.UPDATE_SOLD_OUT_COUPON)
export const editUserCouponRequest
	= createAction(Const.EDIT_USER_COUPON_REQUEST)
export const updateUserCoupon
	= createAction(Const.UPDATE_USER_COUPON)
export const createOrderRequest
	= createAction(Const.CREATE_ORDER_REQUEST)
export const payRequest
	= createAction(Const.PAY_REQUEST)
export const cancelOrderRequest
	= createAction(Const.CANCEL_ORDER_REQUEST)
export const getOrderListRequest
	= createAction(Const.GET_ORDER_LIST_REQUEST)
export const insertOrderListRequest
	= createAction(Const.INSERT_ORDER_LIST_REQUEST)
export const initialPage
	= createAction(Const.INITIAL_PAGE)
export const setOrderPage
	= createAction(Const.SET_ORDER_PAGE)
export const setOrderList
	= createAction(Const.SET_ORDER_LIST)
export const insertOrderList
	= createAction(Const.INSERT_ORDER_LIST)
export const getOrderInfoRequest
	= createAction(Const.GET_ORDER_INFO_REQUEST)
export const setOrderInfo
	= createAction(Const.SET_ORDER_INFO)
export const openCouponRequest
	= createAction(Const.OPEN_COUPON_REQUEST)
export const openCoupon
	= createAction(Const.OPEN_COUPON)
export const refreshOrderListRequest = createAction(Const.REFRESH_ORDER_LIST_REQUEST)
