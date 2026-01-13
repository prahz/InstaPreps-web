const purge = ['./src/**/*.{js,ts,jsx,tsx,htm,html}', './pages/**/*.{js,ts,jsx,tsx,htm,html}'];
const plugins = [require('@tailwindcss/typography'), require('@tailwindcss/forms')];

module.exports = {
  mode: 'jit',
  purge,
  
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        3: 'repeat(3, minmax(0, 1fr))',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px'
      }
    },
    order: {
      first: '-9999',
      last: '9999',
      normal: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#1a3e6f',
        secondary: {
          DEFAULT: '#45c1c5',
          light: '#94dfe1'
        },
        green:{ DEFAULT:'#47c068'},
        indigo: '#6553e1',
        gray: {
          dark: '#323047',
          DEFAULT: '#263542',
          light: '#bfc8d3',
          lightest: '#f7fefe'
        },
        carrot:  { DEFAULT:"#E57D5C"},
        orange:'#f2bb24'
       ,

        yellow:
          { DEFAULT:'#ffd600'},
        goldish: "#C69867",
        yelloish: "#FFD23F",
        sky:   "#00A8E5",
         carrot: "#E57D5C",
        flyout: '#f08f45',
        floral: '#fffcf7',
        red: {
          DEFAULT: '#d92a27'
        },
        tint: '#0d213d'
      },
      fontFamily: {
        luckiest: ['Luckiest Guy', 'cursive'],
        Monofett: ['Monofett', 'cursive'],
      },
      fontSize: {
        xxs: '0.625rem',
        xs11: '0.6875rem',
        sm13: '0.8125rem'
      },
      borderRadius: {
        '4xl': '35px'
      },
      transitionProperty: {
        width: 'width'
      },
      // TODO: @samir the box shadow values are reversed
      // boxShadow: {
      //   'card-shadow': '0 5px 20px 0 rgba(38, 53, 66, 0.1)',
      //   'input-shadow': '0 8px 15px 0 rgba(38, 53, 66, 0.1)',
      //   'notification-shadow': '0 10px 20px 0 rgba(38, 53, 66, 0.1)',
      //   'btn-group-shadow': '0px 0px 0px 1px #bfc8d3 inset',
      //   'switch-shadow': '0 3px 1px 0 rgba(0, 0, 0, 0.06), 0 3px 8px 0 rgba(0, 0, 0, 0.15)',
      //   'calendar-shadow': '0 7px 64px 0 rgba(0, 0, 0, 0.07)',
      //   'btn-shadow': '0 5px 10px 0 rgba(38, 53, 66, 0.3)'
      // },
      boxShadow: {
        primary: '0 9px 23px 0 #ebe9ff',
        secondary: '0 5px 10px 0 rgba(38, 53, 66, 0.3)'
      },
      width: {
        'w-88': '88%',
        'w-max': 'max-content'
      },
      height: {
        0.7: '3px'
      },
      backgroundImage: {
        'calender-icon': "url('/icons/calender.svg')",
        'cross-icon': "url('/icons/cross.svg')",
        'caret-icon': "url('/icons/caret-right.svg')",
        'caret-double-icon': "url('/icons/caret-double-right.svg')",
        'signup-illustration': "url('/icons/signup-illustration.svg')"
      },
      backgroundPosition: {
        top: 'top',
        'top-10': 'right top 40px'
      },
      screens: {
        '2xl': '1440px'
      }
    },
    fontFamily: {
      body: 'DM Sans',
      title: 'IBM Plex Sans'
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'],
      fontSize: ['responsive', 'hover', 'focus'],
      position: ['hover', 'group-hover'],
      width: ['hover', 'group-hover'],
      margin: ['hover', 'group-hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
      pointerEvents: ['disabled']
    }
  },
  plugins
};
