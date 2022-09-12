import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../../ulti/setting";

export const CheckoutTemplate = (props) => {
    const { Component, ...restProps } = props;

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />
    }

    return (
        <Route {...restProps} exact render={(propsRoute) => {
            return (
                <Fragment>
                    <Component {...propsRoute} />
                </Fragment>
            )
        }} />
    )
};