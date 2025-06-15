
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        // Indian/Vedic Cultural Colors
        indian: {
          saffron: "#FF9933",
          white: "#FFFFFF", 
          green: "#138808",
          red: "#DC143C",
          gold: "#FFD700",
          turmeric: "#E4B429",
          lotus: "#FFB6C1"
        },
        // East Asian Cultural Colors
        eastasia: {
          red: "#DA251D",      // Festive/Lucky Red
          gold: "#FFD700",     // Imperial Gold
          jade: "#00A86B",     // Jade Green
          navy: "#1B365D",     // Deep Blue
          cherry: "#FFB7C5",   // Cherry Blossom
          bamboo: "#7CB342"    // Bamboo Green
        },
        // Arabic/Islamic Cultural Colors
        arabic: {
          emerald: "#278878",  // Islamic Green
          gold: "#E5C965",     // Calligraphy Gold
          sapphire: "#0F4C75", // Deep Blue
          pearl: "#F8F6F0",    // Pearl White
          coral: "#FF6B6B",    // Coral Pink
          bronze: "#CD7F32"    // Bronze
        },
        // Egyptian Cultural Colors
        egyptian: {
          blue: "#243C89",     // Egyptian Blue
          gold: "#F3C13A",     // Pharaoh Gold
          sandstone: "#C19A6B", // Desert Sand
          papyrus: "#F4E4BC",  // Papyrus
          turquoise: "#40E0D0", // Nile Turquoise
          ochre: "#CC7722"     // Red Ochre
        },
        // Greek/Roman Cultural Colors
        greek: {
          marble: "#F8F6F3",   // Marble White
          laurel: "#B8A165",   // Laurel Gold
          olympic: "#004B87",  // Olympic Blue
          wine: "#722F37",     // Wine Red
          olive: "#808000",    // Olive Green
          bronze: "#CD7F32"    // Olympic Bronze
        },
        // Russian Cultural Colors
        russian: {
          red: "#DC143C",      // Russian Red
          gold: "#FFD700",     // Orthodox Gold
          blue: "#0039A6",     // Russian Blue
          white: "#FFFFFF",    // Pure White
          berry: "#F25038",    // Berry Red
          pine: "#37833B",     // Forest Pine
          onion: "#B8860B"     // Onion Dome Gold
        }
			},
			fontFamily: {
        // Cultural Font Families (Note: These require Google Fonts integration)
				indian: ["'Yatra One'", "'Baloo 2'", "cursive", "sans-serif"],
        roman: ["'Cinzel'", "'Trajan Pro'", "serif"],
        arabic: ["'Cairo'", "'Amiri'", "sans-serif"],
        egyptian: ["'Papyrus'", "'Hieroglyphic'", "fantasy", "serif"],
        eastasia: ["'Noto Sans SC'", "'Ma Shan Zheng'", "sans-serif"],
        russian: ["'Ruslan Display'", "'Comfortaa'", "cursive", "sans-serif"],
        zen: ["'Noto Sans JP'", "'Zen Kaku Gothic New'", "sans-serif"]
      },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        // Cultural Animation Keyframes
        'mandala-spin': {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '0.05' },
          '50%': { transform: 'rotate(180deg) scale(1.05)', opacity: '0.15' },
          '100%': { transform: 'rotate(360deg) scale(1)', opacity: '0.05' }
        },
        'lotus-bloom': {
          '0%': { transform: 'scale(0.8)', opacity: '0.1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.2' },
          '100%': { transform: 'scale(1)', opacity: '0.1' }
        },
        'laurel-shimmer': {
          '0%': { opacity: '0.1' },
          '50%': { opacity: '0.25' },
          '100%': { opacity: '0.1' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'mandala-spin': 'mandala-spin 8s ease-in-out infinite',
        'lotus-bloom': 'lotus-bloom 3s ease-in-out infinite',
        'laurel-shimmer': 'laurel-shimmer 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
