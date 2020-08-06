import { useField } from 'formik';
import React, { useState } from 'react'
import TextareaAutosize from 'react-autosize-textarea';

export const UITextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <TextareaAutosize
                rows={2}
                minRows={2}
                maxRows={5}
                className="text-area"
                {...field} {...props}
            />
            {/* <textarea className="text-area" rows={rows} {...field} {...props} /> */}
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}
