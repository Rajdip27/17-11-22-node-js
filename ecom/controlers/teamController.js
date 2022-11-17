module.exports={
    index: (req, res, next)=> {
        res.render('index', { title: 'Admin team' });
      },

      create: (req, res, next)=> {
        res.render('index', { title: 'Admin team create' });
      },
      
      edit: (req, res, next)=> {
        res.render('index', { title: 'Admin team edit' });
      },

      delete: (req, res, next)=> {
        res.render('index', { title: 'Admin team delete' });
      },

      show: (req, res, next)=> {
        res.render('index', { title: 'Admin team show' });
      },

      store: (req, res, next)=> {
        res.render('index', { title: 'Admin team store' });
      },

      update: (req, res, next)=> {
        res.render('index', { title: 'Admin team update' });
      },
      
}