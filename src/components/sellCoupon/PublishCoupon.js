/**
 * Author：pengfei
 * Create Date：2016/12/8
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 发布商品组建
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input, Button, Switch} from 'react-onsenui'


const InputComponent = ({input, type, placeholder}) => {
    return (
        <Input {...input}
               type={type}
               placeholder={placeholder}
               modifier='underbar'
               float/>
    )
};

const TextAreaComponent = ({input, placeholder}) => {
    return (
        <textarea {...input}
                  className="textarea"
                  rows='3'
                  placeholder={placeholder}
        />
    )
};

const CheckBoxComponent = ({input}) => {
    return (
        <Switch checked={!!input.value} onChange={(event)=> {
            input.onChange(event.target.checked)
        }}/>
    )
};

const PublishCoupon = (props)=> {
    const {handleSubmit, onSubmit, invalid, submitting} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section style={{textAlign: 'center'}}>
                <p>
                    <Field type="text"
                           name="couponName"
                           component={InputComponent}
                           placeholder="商品名称"/>
                </p>
                <p>
                    <Field type="text"
                           name="couponCode"
                           component={InputComponent}
                           placeholder="商品码"/>
                </p>
                <p>
                    <Field type="number"
                           name="originalPrice"
                           component={InputComponent}
                           placeholder="原价"/>
                </p>
                <p>
                    <Field type="number"
                           name="sellingPrice"
                           component={InputComponent}
                           placeholder="售卖价"/>
                </p>
                <p>
                    <Field type="number"
                           name="TicketPrice"
                           component={InputComponent}
                           placeholder="券面价"/>
                </p>
                <p>
                    <Field type="date"
                           name="effectiveDate"
                           component={InputComponent}
                           placeholder="有效期截至日"/>
                </p>

                <p>
                    <label className='center'>自动退货 </label>
                    <Field name="isAutomaticRefund" component={CheckBoxComponent}/>

                </p>
                <p>
                    <Field
                        name="description"
                        component={TextAreaComponent}
                        placeholder="描述"/>
                </p>
                <p>
                    <Button modifier="large" disabled={invalid || submitting} onClick={props.submit}>确认发布</Button>
                </p>
            </section>
        </form>
    )
};

PublishCoupon.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

const validate = (value) => {
    const errors = {}
    if (!value.couponName) {
        errors.couponName = 'Required'
    }
    if (!value.couponCode) {
        errors.couponCode = 'Required'
    }
    if (!value.originalPrice) {
        errors.originalPrice = 'Required'
    }
    if (!value.sellingPrice) {
        errors.sellingPrice = 'Required'
    }
    if (!value.effectiveDate) {
        errors.effectiveDate = 'Required'
    }
    return errors
}

export default reduxForm({
    form: "PublishCoupon", validate
})(PublishCoupon)