const supabase = require("../config/Supa");


const fetchData = async (req,res) => {
    const { data } = await supabase.from("products").select();
    res.send(data);

  };
  
const mailingList = async (req, res) => {
    try {
        await supabase.from("customers").insert(req.body);
        res.send("success");
    }
    catch (error) {
        console.log(error);
    }
    
};
  
module.exports = {
    fetchData,
    mailingList
}
  