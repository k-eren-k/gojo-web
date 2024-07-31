const express = require('express');
const router = express.Router();

const teamMembers = [  
  { name: 'Eren', image: 'https://cdn.discordapp.com/avatars/1033759126901227522/a_cc503e838dceecaa6b519dbceda334e7.gif', role: '' },  
];

const commands = [
  { value: 'ping', label: 'Ping' },
  { value: 'status', label: 'Status' },
  { value: 'status', label: 'Status' },
  { value: 'status', label: 'Status' },
  { value: 'status', label: 'Status' },
  { value: 'status', label: 'Status' },
  { value: 'status', label: 'Status' },
  { value: 'status', label: 'Status' },
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Anasayfa' });
});

router.get('/team', (req, res) => {  
  res.render('team', { teamMembers });  
}); 

router.get('/commands', (req, res) => {
  res.render('commands', { commands });
});

router.use((req, res, next) => {  
  next();   
  res.status(404).render('404', { title: 'Sayfa Bulunamadı' });  
});  

module.exports = router;
