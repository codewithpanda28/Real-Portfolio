# Akash Kumar

!
This is my debut project utilizing Next.js, a portfolio website featuring four primary sections: Home, About, Projects, and Contact. The site is brought to life with animations powered by Framer Motion, enhanced page transitions with Fullpage.js, and styled using elements of Tailwind CSS. This project also read list of project data from a JSON file. It serves as a showcase of my web development skills and represents my initial foray into web development with Next.js.

## Features

* **Smooth Animation:** Smooth page scroll and scroll trigger animation.
* **Smooth Page Transition:** Smooth page transition with prefetching feature of next js.
* **Dynamic Data:** Read the project data from JSON file instead of directly implemented the data.
* **Intelliticks chat widget:** Chat with owner of the web realtime.
* **Spotify realtime widget:** Show what song youre playing in this web.

## Installation

1. Ensure you have [pnpm](https://pnpm.io/) installed. If not, you can install it using:

   ```shell
   npm install -g pnpm
   ```
2. Clone the repository:

   ```shell
   git clone https://github.com/Alvalens/Alvalens-porto-2-nextJs.git
   ```
3. Navigate to the project directory:

   ```shell
   cd Alvalens-porto-2-nextJs
   ```
4. Install dependencies:

   ```
   pnpm install
   ```
5. Start the development server

   ```shell
   pnpm next dev
   ```
6. Update the Intelliticks chat widget script in components/Chat.jsx, with your own

   ```javascript
    "use client"
    import { useEffect } from "react";

    // Component for Intelliticks chat widget
    const Chat = () => {
    	useEffect(() => {
    		// Replace the Intelliticks script here

    	}, []);

    	return null;
    };

    export default Chat;
   ```
7. Set env.local by copying env.example and fill the variable

   ```
   NEXT_PUBLIC_SPOTIFY_CLIENT_ID=
   NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=
   NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN=
   ```

## Usage

There are four main sections and two subpages in this portfolio website:

### Home

The home page serves as an introduction to the portfolio. It provides an overview of your web development skills and passion for the field. Users can explore other sections from here.

### About

The about page offers more detailed information about you as a web developer. It might include your background, education, skills, and interests in the field of web development.

### Projects

The projects section showcases your work as a web developer. Users can explore the projects you've worked on, and you can provide details such as project descriptions, technologies used, and images.

### Contact

The contact page allows users to get in touch with you. You can provide contact information or a contact form for inquiries.

### Subpages

- **Project archive:** list all of your project that dont needed to display at main project page.
- Project details: See the main project detail by clicking the project image.

Feel free to customize and expand upon these sections and subpages to suit your needs and showcase your unique skills and projects.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the GPL-3.0 License see the [LICENSE](LICENSE) file for details.
#   R e a l - P o r t f o l i o 
 
 