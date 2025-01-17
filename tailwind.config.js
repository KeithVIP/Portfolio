/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./src/components/**/*.{html,js}"
  ],
  theme: {
    screens: {
      'mobile': '360px',
      'tablet': '575px',
      'laptop': '1024px',
      'desktop': '1280px'

    },
    colors: {
      'c-yellow': '#fcde67',
      'c-blue': '#5bccf6',
      'c-black': '#030e12',
      'c-gray': '#363636',
      'c-white': '#FFFFFF',
      'c-shade': '#393939',
      'c-red': '#F9403A'
    },
    backgroundColor: {
      'c-yellow': '#fcde67',
      'c-red': '#F9403A',
      'c-blue': '#5bccf6',
      'c-black': '#030e12',
      'c-gray': '#363636',
      'c-white': '#FFFFFF',
      'c-shade': '#393939',
      'c-tblack': 'rgba(0, 0, 0, 0.4)',
      'c-tblue': 'rgba(0, 0, 255, 0.4)',
      'c-tgray': 'rgba(54, 54, 54, 0.9)'
    },
    backgroundImage: {
      'vintage': "url('../src/assets/images/vintagebackground7.png')",
      'paper': "url('../src/assets/images/temp/1080background.png')",
    },
    fontFamily: {
      Aboreto: ['Aboreto', 'cursive'],
      Cinzel: ['Cinzel', 'serif'],
      Cutive: ['Cutive', 'serif'],
      Josefin: ['Josefin Sans', 'sans-serif'],
      League: ['League Spartan', 'sans-serif'],
      Nanum: ['Nanum Gothic', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    minHeight: {
      '0': '0px',
      'full': '100%',
      'screen': '100vh',
      'screen-80': '80vh',
      'min': 'min-content',
      'max': 'max-content',
      'fit': 'fit-content',
    },
    extend: {
      animation: {
        'fade1': 'fade1 1.5s ease-out',
        'fade2': 'fade2 1.5s ease-out',
        'fade3': 'fade3 1.5s ease-out',
        'nav1-slide': 'nav1-slide 1.0s ease-out',
        'nav2-slide': 'nav2-slide 1.0s ease-out',
        'nav3-slide': 'nav3-slide 1.0s ease-out',
        'nav1-down': 'nav1-down 1.0s ease-out',
        'nav2-down': 'nav2-down 1.0s ease-out',
        'nav3-down': 'nav3-down 1.0s ease-out',
        'fade2': 'fade2 1s ease-out',
        'fade3': 'fade3 1s ease-out',
        'slider1': 'slider1 1.5s ease-in-out',
        'slider2': 'slider2 1.5s ease-in',
        'slider3': 'slider3 1.5s ease-in-out',
        'bounce': 'bounce 1.5s ease-in-out infinite',
        'bouncey': 'bouncey 1.5s ease-out infinite'
      },
      dropShadow: {
        '3xl': '1px 1px 2px rgba(3, 14, 18, 1)',
        'shade': '1px 1px 2px rgba(3, 14, 18, 1)',
        '4xl': [
          '0 2px 2px rgba(200, 200, 150, 0.95)'
        ]
      },
      keyframes: {
        'fade1': {
          '0%, 25%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        'fade2': {
          '0%, 50%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        'fade3': {
          '0%, 75%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        'nav1-slide': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        'nav2-slide': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        'nav3-slide': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        'nav1-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        'nav2-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        'nav3-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        'slider1': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        'slider2': {
          '0%': {
            opacity: '0',
            transform: 'translateX(250px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        'slider2': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-250px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        'bounce': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(50px)'
          }
        },
        'bouncey': {
          '0%, 100%': {
            transform: 'translateY(-150px)'
          },
          '15%': {
            transform: 'translateY(0px)'
          }
        }
      }
    },
    plugins: [
    ]
  }
};