interface CustomButtonProps {
    label: string;
    onClick: () => void;
    className?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({label, onClick, className}) => {
  return (
    <div 
        className={`w-full py-4 bg-airbnb text-center hover:bg-airbnb-dark transition text-white rounded-xl cursor-pointer ${className}`}
        onClick={onClick}
    >
      {label}
    </div>
  )
}

export default CustomButton
