const handleChange = (e, setFunction, previousState, setErrors) => {
    setFunction({ ...previousState, [e.target.name]: e.target.value });
  };

  export default handleChange;