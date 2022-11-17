module.exports={
    index: (req, res, next)=> {
        res.render('index', { title: 'Admin Contact' });
      },

      create: (req, res, next)=> {
        res.render('index', { title: 'Admin Contact create' });
      },
      
      edit: (req, res, next)=> {
        res.render('index', { title: 'Admin Contact edit' });
      },

      delete: (req, res, next)=> {
        res.render('index', { title: 'Admin Contact delete' });
      },

      show: (req, res, next)=> {
        res.render('index', { title: 'Admin Contact show' });
      },

      store: (req, res, next)=> {
        res.render('index', { title: 'Admin Contact store' });
      },

      update: (req, res, next)=> {
        res.render('index', { title: 'Admin Contact update' });
      },
      
}