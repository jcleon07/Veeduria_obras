import type { HTMLInputTypeAttribute } from "react";

type TextBoxProps = {
    name?: string;
    placeholder: string;
    type: HTMLInputTypeAttribute;
    isDisabled?: boolean;
    maxLength?: number;
};

export default function TextBox({ name, placeholder, type, isDisabled, maxLength }: TextBoxProps) {
    return (
        <div className="flex flex-col w-full">
            <label
                htmlFor={name}
                className="ml-4 text-black font-space-mono text-[15px]"
            >
                {name}
            </label>
            <input
                id={name}
                type={type}
                maxLength={maxLength}
                placeholder={placeholder}
                disabled={isDisabled === true}
                className="p-2 border border-gray-300 rounded-xl placeholder:text-gray-400 placeholder:font-space-mono placeholder:text-[15px] font-space-mono text-[15px]"
            />
        </div>
    );
}