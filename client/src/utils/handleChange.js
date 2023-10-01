const handleChange = (e, setFunction, previousState) => {
    setFunction({ ...previousState, [e.target.name]: e.target.value });
  };

  export default handleChange;