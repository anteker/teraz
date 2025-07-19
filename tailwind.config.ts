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
				minecraft: {
					yellow: 'hsl(var(--minecraft-yellow))',
					green: 'hsl(var(--minecraft-green))',
					blue: 'hsl(var(--minecraft-blue))',
					red: 'hsl(var(--minecraft-red))',
					gray: 'hsl(var(--minecraft-gray))',
					dark: 'hsl(var(--minecraft-dark))',
					light: 'hsl(var(--minecraft-light))'
				},
				indigo: {
					primary: 'hsl(var(--indigo-primary))',
					dark: 'hsl(var(--indigo-dark))',
					light: 'hsl(var(--indigo-light))'
				},
				'black-primary': 'hsl(var(--black-primary))',
				'black-light': 'hsl(var(--black-light))',
				'white-primary': 'hsl(var(--white-primary))',
				'white-muted': 'hsl(var(--white-muted))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'minecraft-glow': {
					'0%': {
						'box-shadow': '0 0 20px hsla(var(--minecraft-yellow), 0.3)'
					},
					'100%': {
						'box-shadow': '0 0 40px hsla(var(--minecraft-yellow), 0.6)'
					}
				},
				'minecraft-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'minecraft-glow': 'minecraft-glow 2s ease-in-out infinite alternate',
				'minecraft-bounce': 'minecraft-bounce 0.6s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite'
			},
			fontFamily: {
				'minecraft': ['Courier New', 'monospace']
			},
			backgroundImage: {
				'gradient-minecraft': 'var(--gradient-minecraft)',
				'gradient-dark': 'var(--gradient-dark)'
			},
			boxShadow: {
				'minecraft': 'var(--shadow-minecraft)',
				'glow': 'var(--shadow-glow)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
