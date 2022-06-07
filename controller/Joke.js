const { default: axios } = require("axios");
exports.jokeOfTheDay = async (req, res) => {

    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=single');
        const {joke} = response.data;
        res.send({joke});

    } catch (error) {
        
        console.error(error);
        res.send({error});
    }
};