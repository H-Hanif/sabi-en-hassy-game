  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  let currentPlayer;
  let opponent;
  let gameInterval;

  const characters = {
    topG: {
      name: 'Top G',
      color: 'blue',
      x: 50,
      y: canvas.height - 50,
      width: 50,
      height: 50,
      health: 100,
      isBlocking: false,
      comboCount: 0,
    },
    dolceNoepie: {
      name: 'Dolce Noepie',
      color: 'red',
      x: canvas.width - 100,
      y: canvas.height - 50,
      width: 50,
      height: 50,
      health: 100,
      isBlocking: false,
      comboCount: 0,
    
    },
    jhonnyAhoy: {
      name: 'Jhonny Ahoy',
      color: 'yellow',
      x: canvas.width / 2 - 25,
      y: canvas.height - 50,
      width: 50,
      height: 50,
      health: 100,
      isBlocking: false,
      comboCount: 0,
    },
  };

  function showIntro() {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('introScreen').style.display = 'flex';
  }

  function selectCharacterScreen() {
    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('characterSelection').style.display = 'flex';
  }

  function startGame() {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('characterSelection').style.display = 'flex';
  }

  function selectCharacter(character) {
    currentPlayer = characters[character];
    opponent = characters['dolceNoepie']; // Opponent can be dynamically chosen
    document.getElementById('characterSelection').style.display = 'none';
    document.getElementById('controlsMenu').style.display = 'flex';
    canvas.style.display = 'block';
    startGameLoop();
  }

  function startGameLoop() {
    gameInterval = setInterval(updateGame, 16); // Adjust the interval as needed
  }

  function updateGame() {
    clearCanvas();
    drawCharacters();
    handleInputs();
    updateGameLogic();
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawCharacters() {
    drawCharacter(currentPlayer);
    drawCharacter(opponent);
  }

  function drawCharacter(character) {
    const image = new Image();
    image.src = `images/${character.name.toLowerCase()}.png`;
  
    image.onload = function() {
      ctx.drawImage(image, character.x, character.y, character.width, character.height);
    };
  
    image.onerror = function() {
      console.error(`Error loading image for ${character.name}`);
    };
    // Add more character drawing logic (animations, etc.)
  }
  

  function handleInputs() {
    // Implement keyboard input handling for character movement, attacks, blocking, etc.
  }

  function updateGameLogic() {
    // Implement game logic, collision detection, health management, etc.

    // Example: Check if a combo is executed
    if (currentPlayer.comboCount >= 3) {
      executeComboAttack();
      currentPlayer.comboCount = 0; // Reset combo count after executing a combo
    }
  }

  function executeComboAttack() {
    // Implement logic for a powerful combo attack
    console.log(`${currentPlayer.name} executes a combo attack!`);
  }

  // Add more game functions as needed

  // Example: Function to pause the game
  function pauseGame() {
    clearInterval(gameInterval);
    // Show pause menu, update UI, etc.
  }

  // Example: Function to resume the game
  function resumeGame() {
    startGameLoop();
    // Hide pause menu, update UI, etc.
  }

  // Example: Function to handle key bindings
  function changeKeyBindings() {
    // Implement key binding change functionality
    alert('Key bindings changed!');
  }

  // Example: Function to change character during the game
  function changeCharacter() {
    // Implement character change functionality
    selectCharacterScreen();
  }

  // Add event listeners for keyboard inputs, such as arrow keys, punches, kicks, etc.
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  function handleKeyDown(event) {
    // Implement keydown handling
  }

  function handleKeyUp(event) {
    // Implement keyup handling
  }
  
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  function handleKeyDown(event) {
    // Open controls menu on pressing the "Escape" key
    if (event.key === 'Escape' && !document.getElementById('characterSelection').style.display) {
      document.getElementById('controlsMenu').style.display = 'flex';
      pauseGame(); // Optionally pause the game when opening the controls menu
    }

    // Implement other keydown handling
  }

  function handleKeyUp(event) {
    // Implement keyup handling
  }
