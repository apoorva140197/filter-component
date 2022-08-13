import React from 'react';
export interface CheckboxOtherProps {
    label?: string;
    labelStyle?: React.CSSProperties;
    labelTextStyle?: React.CSSProperties;
}
export interface CheckboxProps extends CheckboxOtherProps, React.InputHTMLAttributes<CheckboxProps> {
}
