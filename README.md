# Lethal Company Fan Website 

### Disclaimer
This is sadly not an officially recognized website by Zeekers, but maybe one day...

## Description
Lethal Company Website is an attempt to make an unofficial official website for the popular game Lethal Company. It provides users with a fun Lethal Company style terminal (including the standard three questions), along with animations and soundscapes for the company motivational mottos. It also encourages interactions by including mouse and keyboard sounds, and has a full canon compliant bestiary along with images of the monsters.

### Features
- Terminal style interface that looks like the Lethal Company style terminal
- Lethal Company inspired logon page
- Keyboard and mouse sounds
- Company logo cards and sounds
- Full bestiary as according to game data stored in JSON object

### How It Works
- Players are initially on the logo page where it displays a terminal inspired by the Lethal Company opening terminal. On mouse/keyboard click they navigate to the next page
- The question page asks the three questions that Lethal Company asks at the beginning of their games (name, position, and favorite animal). Once the players enter all the questions, they go to the next page
- This is the homescreen where players are greeted with their name and the day of the week (like within the game), and then are able to click buttons to have cards with a dancing Lethal Company player pop up that also have the company motto sounds playing during the dancing. Players can then click the link to go to the Bestiary
- In the Bestiery, players are given three tables with overview stats for all of the monsters. These stats were collected from the Lethal Company Wiki. The three monster tables are split into if the monsters are outdoor mosters, indoor monsters, and daytime monsters. 
- Players can then click on the monster's link to get Sigurd's entry on the monster along with a 3D model of the monster.

### Tech Stack
- React app using Vite as the bundler
    - Uses react-dom for page management
    - Uses eslint for config
    - Uses react hooks for custom management
- Uses JSON for storing data about the monsters

### Installation
- git clone the repository
- `cd` into the repository
- Run `npm install` to install the dependancies
- Run `npm run dev` to start the program
- Ensure you have port 5173 open for running

## License
MIT, feel free to branch and fork, please attribute though.

## Authors/Attributions
- Mimi Pieper (Bestiary, JSON, terminal design and implementaion, logo page, user input design)
- Lethal Company Wiki Fandom for monster information [here](https://lethal-company.fandom.com/wiki/Bestiary)

## Contact
- Reach out to Mimi on [LinkedIn](https://www.linkedin.com/in/mimi-pieper/)

## Future Plans
- Add in a MongoDB backend
- Move monster table data out of Bestiary.jsx
- Keep all terminal pages on the screen at once to better simulate a terminal
- Custom Lethal Company helmet logo needed
