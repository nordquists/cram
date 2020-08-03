import { useField } from 'formik';
import React from 'react'

export const UICheckBox = ({ children, ...props }) => {
    const [field, meta] = useField(props, 'checkbox');

    return (
        <>
            <label className="checkbox">
                <input type="checkbox" {...field} {...props}/>
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}
