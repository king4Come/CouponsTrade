/**
 * Author：Yky
 * Create Date：2016/12/14
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 创建支付信息表单的组件
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {List, ListItem, ListHeader, Button, Input} from 'react-onsenui'
import ItemInfo from './ItemInfo'
import ons from 'onsenui'
import OrderResult from './OrderResult'

const defaultValue = {
    payment: "微信"
};

const MyRadio = ({input, row}) => {
    return (
        <Input
            inputId={`radio-${row}`}
            checked={row === input.value}
            onChange={(e) => {
                input.onChange(e.target.value = row)
            }}
            type="radio"/>
    )
};

const renderRadioRow = (row) => {
    return (
        <ListItem key={row} tappable>
            <label className='right'>
                <Field name="payment" component={MyRadio} row={row}/>
            </label>
            <label htmlFor={`radio-${row}`} className='center'>
                {row}
            </label>
        </ListItem>
    )
};

const Payment_form = (props) => {
    const {handleSubmit, load} = props;
    const handleClick = () => {
        ons.notification.confirm("模拟支付结果", {title: "说明", buttonLabels: ["失败", "成功"]}).then(
            res => {
                if (res === 0) {
                    props.navigator.pushPage({
                        comp: OrderResult, props: {key: "OrderResult", res: 0}
                    })
                } else {
                    props.navigator.replacePage({
                        comp: OrderResult, props: {key: "OrderResultSuccess", res: 1, navigator: props.navigator}
                    })
                }
            }
        )
    };
    return (
        <form onSubmit={handleSubmit}>
            <List
                dataSource={["微信", "支付宝"]}
                renderHeader={() => <ListHeader>支付方式</ListHeader>}
                renderRow={renderRadioRow}
            />
            <ItemInfo item={props.item} price={props.price}/>
            <label htmlFor="content"><ListHeader>留言</ListHeader></label>
            <Field id="content" name="content" component="textArea" className="textarea" placeholder="说点什么吧..."/>
            <div style={{
                position: "absolute", bottom: "0", width: "100%",
                lineHeight: "40px", overflow: "hidden"
            }}>
                应付金额：{props.price}元
                <Button style={{float: "right", width: "30%", textAlign: "center"}}
                        onClick={handleClick}
                >支付</Button></div>
        </form>
    )
};

export default reduxForm({
    form: 'payment',
    initialValues: defaultValue
})(Payment_form)