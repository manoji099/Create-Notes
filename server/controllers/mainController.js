// GET Homepage

exports.homepage=async(req,res) => {
    const locals = {
        title: 'Notes',
        description: 'Free Notes App'
    }
    res.render('index',locals);

}

// GET About

exports.about=async(req,res) => {
    const locals = {
        title: 'Notes',
        description: 'Free Notes App'
    }
    res.render('about',locals);

}