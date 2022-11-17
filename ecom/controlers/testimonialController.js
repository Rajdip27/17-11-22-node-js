module.exports={
    index: (req, res, next)=> {
        res.render('index', { title: 'Admin testimonial' });
      },

      create: (req, res, next)=> {
        res.render('index', { title: 'Admin testimonial create' });
      },
      
      edit: (req, res, next)=> {
        res.render('index', { title: 'Admin testimonial edit' });
      },

      delete: (req, res, next)=> {
        res.render('index', { title: 'Admin testimonial delete' });
      },

      show: (req, res, next)=> {
        res.render('index', { title: 'Admin testimonial show' });
      },

      store: (req, res, next)=> {
        res.render('index', { title: 'Admin testimonial store' });
      },

      update: (req, res, next)=> {
        res.render('index', { title: 'Admin testimonial update' });
      },
      
}