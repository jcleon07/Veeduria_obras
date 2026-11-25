import type { HTMLInputTypeAttribute } from "react";

type TextBoxProps = {
    name?: string;
    label: string;
    placeholder?: string;
    type: HTMLInputTypeAttribute;
    isDisabled?: boolean;
    maxLength?: number;
    value: string;
    onChange: (value: string) => void;
    validate?: boolean;
    onBlur?: (value: string) => void;
    message?: string;
    multiLine?: boolean;
};

export default function TextBox({ 
    name, 
    placeholder, 
    type, 
    isDisabled, 
    maxLength,
    label,
    value,
    onChange,
    validate,
    onBlur,
    message,}: TextBoxProps) {
    return (
        <div className="flex flex-col w-full">
            <label
                htmlFor={label}
                className="ml-4 text-black font-space-mono text-[15px]"
            >
                {name}
            </label>
            <textarea
            rows={4}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{ resize: 'none' }}
            />
        </div>
    );
}