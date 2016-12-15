/**
 * Author：pengfei
 * Create Date：2016/12/14
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

import React from 'react'
import PublishCoupon from '../components/sellCoupon/PublishCoupon'
import SellingCoupons from './SellCoupons'
import ons from 'onsenui'

const PublishCoupons = (props)=> {
    const {navigator} = props;
    const handleClick = () => {
        console.log("1")
        ons.notification.confirm("是否确认发布", {title: "说明", buttonLabels: ["否", "是"]}).then(
            res => {
                if (res === 1) {
                    navigator.pushPage({
                        comp: SellingCoupons, props: {key: "SellingCoupons"}
                    })
                }
            }
        )
    }

    return (
        <PublishCoupon onSubmit={handleClick} flag="1"/>
    )
}

export default PublishCoupons