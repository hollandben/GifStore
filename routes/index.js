module.exports = {

    app: function(req, res) {
        res.sendfile('app/app.html');
    },

    login: function(req, res) {
        res.render('login.ejs', {
            referrer: req.query.r,
            message: req.flash('loginMessage')
        });
    },

    register: function(req, res) {
        res.render('register.ejs', { message: req.flash('signupMessage') });
    }
    
};