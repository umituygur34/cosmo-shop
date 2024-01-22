export const getYupErrors = (errors) => {
    const errObj = {};
    errors.forEach((error) => (errObj[error.path] = error.message));
    return {
        message: "",
        errors: errObj,
    };
};

export const convertFormDataToJson = (formData) => {
    return Object.fromEntries(formData.entries());
}