export const fetchData = async (url,setState,loader) => {
    try {
      loader(true);
      const data = await fetch(url);
      const res = await data.json();
      setState(res);
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