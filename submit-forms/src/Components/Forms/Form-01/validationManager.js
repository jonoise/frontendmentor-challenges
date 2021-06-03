const validationManager = (input, value, validatorState, setValidatorState) => {
    switch (input) {
        case 'email':
            const validEmail = runEmailValidation(value)
            if (validEmail) {
                setValidatorState({
                    ...validatorState,
                    [input]: true
                })
            } else {
                setValidatorState({
                    ...validatorState,
                    [input]: false
                })
            }
            break;
        default:
            break;
    }
}


const runEmailValidation = (value) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(value.toLowerCase())
}
export default validationManager