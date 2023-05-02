
const ErrorMessages = ({errorMessages}) => {
    if (!errorMessages || errorMessages.length === 0) {
        return null;
    }

  return (
    <div>
        {errorMessages.length > 0 && (
            <div className="text-errorRed text-[14px] text-center">
                <ul className="list-disc list-inside">
                {errorMessages.map((error, i) => (
                    <li key={i}>{error.charAt(0).toUpperCase() + error.slice(1)}</li>
                ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default ErrorMessages