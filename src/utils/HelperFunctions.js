export const fetchData = async (url,state,loader) => {
    try {
      loader(true);
      const data = await fetch(url);
      const res = await data.json();
      state(res);
    } catch (error) {
      loader(false);
      console.log(error);
    }
    loader(false);
  };

  export const handleChange = (e, state, setState) => {
    e.preventDefault();
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };