const { url } = require("inspector")

module.exports = {
    content: ["./resources/**/*.blade.php", 
    "./resources/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'phone': '375px', // 375x
            'tablet': '768px', // 768x
            'desktop': '1024px', // 1024px
        },
        extend: {
            width: {
                'p1': '10%',
                'p2': '20%',
                'p3': '30%',
                'p4': '40%',
                'p5': '50%',
                'p6': '60%',
                'p7': '70%',
                'p8': '80%',
                'p9': '90%',
                'p0': '100%',
              },
            colors: {
                "blue-1": "#0070E0",
                "blue-2": "#1A7CFA",
                "blue-3": "#A9B7C8",
                "blue-4": "#3B5B95",
                "grey-1": "#686361",
                "grey-2": "#575A59",
                "grey-3": "#E5E5E5",
                "grey-4": "#DCDCE6",
                "grey-5": "#CCCCCC",
                "grey-6": "#424A60",
                yellow: "#FFE15A",
                green: "#00B67A",
                white: "#FFFFFF",
                red: "#E32227"
            },
            spacing: {
                15: '60px',
                25: '100px',
                65: '260px',
                90: '360px',
                110: '440px',
                134: '536px',
                170: '680px',
                175: '704px',
                190: '760px',
                200: '800px',
                225: '900px',
                290: '1160px',
                300: '1200px'
            },
            borderRadius: {
                10: '10px'
            },
            borderWidth: {
                1: '1px',
            }
        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require('flowbite/plugin')
    ],
};
