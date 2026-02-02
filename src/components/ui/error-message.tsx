const ErrorMessage = ({children}: {
    children: React.ReactNode;
}) => {
    return (
        <p
            className={`absolute text-destructive text-xs -bottom-5`
            }
        >
            {children}
        </p>
    )

}
export {ErrorMessage}