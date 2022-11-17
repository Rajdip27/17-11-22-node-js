module.exports={
    index: (req, res, next)=> {
        res.render('index', { title: 'Admin link' });
      },

      create: (req, res, next)=> {
        res.render('index', { title: 'Admin link create' });
      },
      
      edit: (req, res, next)=> {
        res.render('index', { title: 'Admin link edit' });
      },

      delete: (req, res, next)=> {
        res.render('index', { title: 'Admin link delete' });
      },

      show: (req, res, next)=> {
        res.render('index', { title: 'Admin link show' });
      },

      store: (req, res, next)=> {
        res.render('index', { title: 'Admin link store' });
      },

      update: (req, res, next)=> {
        res.render('index', { title: 'Admin link update' });
      },
      
}