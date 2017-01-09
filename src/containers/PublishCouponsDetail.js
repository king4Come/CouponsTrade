/**
 * Author：likon
 * Create Date：2016/12/14
 * Modified By：likon
 * Why & What is modified  <修改原因描述>
 * 发布优惠券列表中查看优惠券详情容器
 */
import React from 'react'
import {Page, Toolbar, BackButton} from 'react-onsenui'
import CouponDetail from '../components/CouponDetail'
import EditCoupons from './EditCoupon'
import {connect}  from 'react-redux'
import {soldOutCouponRequest} from  '../actions'

class PublishCouponsDetail extends React.Component {
    render() {
        return (
            <Page renderToolbar={() => (
                <Toolbar>
                    <div className='left'>
                        <BackButton/>
                    </div>

                    <div className='center'>优惠券详细信息</div>
                </Toolbar>
            )} renderBottomToolbar={() => (
                <div className="tab-bar btnTab">
                    <div className="tab-bar__item">
                        <button className="tab-bar__button" type="submit"
                                onClick={() => this.props.soldOutCouponRequest(
                                    {
                                        apiType: 'soldOutCoupon',
                                        param: {id: this.props.couponInfo.id, token: this.props.token},
                                        router: () => this.props.navigator.replacePage({
                                            comp: EditCoupons,
                                            props: {key: "EditCoupons"}
                                        })
                                    }
                                )
                                }>
                            <ons-icon icon="ion-ios-compose-outline"> 编辑</ons-icon>
                        </button>
                    </div>
                    <div className="tab-bar__item">
                        <button className="tab-bar__button" type="submit"
                                onClick={() => this.props.soldOutCouponRequest(
                                    {
                                        apiType: 'soldOutCoupon',
                                        param: {id: this.props.couponInfo.id, token: this.props.token},
                                        router: () => this.props.navigator.popPage()
                                    }
                                )}>
                            <ons-icon icon="ion-ios-trash-outline"> 下架</ons-icon>
                        </button>
                    </div>
                </div>
            )}>
                <CouponDetail
                    DetailInformation={this.props.couponInfo}>
                </CouponDetail>
            </Page>
        )
    }
}

const mapStateToProps = (state) => (
    {
        couponInfo: state.publishedCoupons.couponInfo,
        token: state.token
    }
)

export default connect(mapStateToProps, {soldOutCouponRequest})(PublishCouponsDetail)