exports.normalToRovarspraket = async (req, res) => {

    let {text} = req.body;
    const regex = /([bcdfghjklmnpqrstvwxz])/gi;
    text =  text.replace(regex, '$1o$1')
    res.send({text});
};

exports.rovarspraketToNormal = async (req, res) => {
    let {text} = req.body;
    const regex = /([bcdfghjklmnpqrstvwxz])o\1/gi;
    text =  text.replace(regex, '$1')
    res.send({text});
};