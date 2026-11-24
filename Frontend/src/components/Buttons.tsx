type ButtonProps = {
    text: string;
    onClick: () => void;
    size?: string;
};

export default function Buttons({text, onClick, size}: ButtonProps) {
    return (
        <div>
            <button className={`"
            cursor-pointer 
            w-${size || 'full'}
            bg-[#000000] 
            text-white
            font-space-mono 
            text-[15px] 
            py-2
            px-4
            rounded-xl
            hover:bg-gray-700"`}
            onClick={onClick}>
                {text}
            </button>
        </div>
    );
}