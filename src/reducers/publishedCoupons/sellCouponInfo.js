/**
 * Author：pengfei
 * Create Date：2016/12/21
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 对查询自己发布的优惠券明细信息操作的reducer
 */


import {insertUserCouponDetails, updateUserCoupon, updateSoldOutCoupon} from '../../actions'
import {createReducer} from 'redux-act'


export default createReducer({
    [insertUserCouponDetails]: (state, couponInfo)=> couponInfo,
    [updateUserCoupon]: (state, couponInfo)=> {
        return {...state, couponInfo}
    },
    [updateSoldOutCoupon]: (state, couponState) => {
        return {...state, couponState}
    }
}, {})