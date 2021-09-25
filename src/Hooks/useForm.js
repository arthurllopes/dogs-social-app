import React from 'react'

const types = {
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z])?/,
        message: 'Preencha um email válido'
    }
}
const useForm = (type) => {

    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function validate(value) {
        if(type === false) {
            return true
        } else if (value.length === 0){
            setError('Preencha um valor')
            return false
        } else if (types[type] && !types[type].regex.test(value)){
            setError(types[type].message)
            return false
        } else {
            setError(null)
            return true
        }
    }

    function onChange({target}){
        if(error) {validate(target.value)}
        setValue(target.value)
    }
    return {
        value,
        setValue,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value),
        error
    }
}

export default useForm
