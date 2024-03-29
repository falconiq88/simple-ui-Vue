module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale:{
      '80':'0.8',
        '0': '0',
       '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
       '95': '.95',
        '100': '1',
       '105': '1.05',
       '110': '1.1',
        '125': '1.25',
        '150': '1.5',
       '200': '2',
    },
    extend: { },
    container: {
      center: true,
    },
  },
  variants: {
    extend: { translate: ["motion-safe"] },
  },
  plugins: [],
};
