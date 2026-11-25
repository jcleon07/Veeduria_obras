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

export default function InputBox({ 
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
            <input
                id={name}
                type={type}
                maxLength={maxLength}
                placeholder={placeholder}
                disabled={isDisabled}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={(e) => onBlur && onBlur(e.target.value)}
                className={`${
                    validate ? "border-gray-300" : "border-red-500"
                }
                    p-2 
                    border 
                    rounded-xl 
                    placeholder:text-gray-400 
                    placeholder:font-space-mono 
                    placeholder:text-[15px] 
                    font-space-mono 
                    text-[15px]`}
            />
            {!validate && message && (
                <span className="ml-4 text-red-500 font-space-mono text-[12px]">
                    {message}
                </span>
            )}
        </div>
    );
}