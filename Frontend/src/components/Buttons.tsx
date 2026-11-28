type ButtonProps = {
    text: string;
    onClick: () => void;
    size?: string;
};

export default function Buttons({text, onClick, size}: ButtonProps) {
    return (
        <div>
            <button className={`
            cursor-pointer 
            w-${size || 'full'}
            bg-[var(--app-button-color)] 
            text-[var(--app-button-text-color)]
            font-space-mono 
            text-[15px] 
            py-2
            px-4
            rounded-xl
            hover:bg-[color:var(--app-button-hover-color)]`}
            onClick={onClick}>
                {text}
            </button>
        </div>
    );
}