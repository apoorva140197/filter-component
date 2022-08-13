export interface DropdownProps {
    options: Array<{
        key: string | number;
        value: string | number;
        text: string | number;
    }>;
    placeholder?: string;
    fluid?: boolean;
    search?: boolean;
    disabled?: boolean;
    style?: Object;
    icon?: string;
    onChange?: Function;
    onClick?: Function;
    value?: string | number;
    checkbox?: boolean;
    multiple?: boolean;
    additionalLabel?: string;
    label?: string;
}
