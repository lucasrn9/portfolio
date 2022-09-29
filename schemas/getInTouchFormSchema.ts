import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().min(2).max(100).required(),
    email:yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"insert a valid email").max(100).required(),
    subject:yup.string().max(100).required(),
    message:yup.string().max(500).required()
})

export default schema