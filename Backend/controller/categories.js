const axios = require("axios");

const getToken = async () => {
    try {
      const data = {
        "companyName": "goMart",
        "clientID": "7bf9dc44-95da-441b-950e-d91161e64478",
        "clientSecret": "tkPErxHwoJVCQcsz",
        "ownerName": "Sudarsanam G",
        "ownerEmail": "sudarsanamg@drngpit.ac.in",
        "rollNo": "710721104105"
      };
      const response = await axios.post("http://20.244.56.144/test/auth", data);
      if (!response) throw new Error("No token found");
      return response.data.access_token;
    } catch (err) {
      throw err;
    }
  };

  const getProduct = async (req, res) => {
    console.log('getProduct')
    const token = await getToken();
    const categoryname = req.params.categoryname;
    const companyName = req.params.companyName; // corrected here
    const n= req.query.top || 10;
    const minPrice=req.params.minPrice || 0;
    const maxPrice=req.params.maxPrice || 10000;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(
        `http://20.244.56.144/test/companies/${companyName}/categories/${categoryname}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        config
    );
    if (!response) return res.status(404).json({ message: "No products found" });
    return res.status(200).json(response.data); // corrected here to return response.data
}

  module.exports = { getProduct };