interface VariableCategoryProps {
    title: string;
    children: React.ReactNode;
}

export const VariableCategory = ({ title, children }: VariableCategoryProps) => {
    return (
        <div className="space-y-4">
            <h3 className="text-[#D5D5D5] font-inter font-[500] text-[15px] leading-[22.5px] text-base">{title}</h3>
            <div className="flex flex-wrap gap-4">
                {children}
            </div>
        </div>
    );
};