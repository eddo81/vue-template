import FontFaceObserver from 'fontfaceobserver';

export default (()=>{

  // Parse scss variables
  const scssvars = process.env.CONFIG.scssvars;

  // Lazyload fonts
  const font1 = new FontFaceObserver('Montserrat', { weight: scssvars['$font-weight--light'] });
  const font2 = new FontFaceObserver('Montserrat', { weight: scssvars['$font-weight--semibold'] });
  const font3 = new FontFaceObserver('Montserrat', { weight: scssvars['$font-weight--bold'] });

  Promise.all([font1.load(null, 60000), font2.load(null, 60000), font3.load(null, 60000)])
  .then(() => { if(!sessionStorage.getItem('fontsLoaded')) { sessionStorage.setItem('fontsLoaded', true); document.documentElement.setAttribute('data-fonts-loaded', true); }})
  .catch((e) => { console.log('Custom fonts failed to load.'); console.log(e); });
})();