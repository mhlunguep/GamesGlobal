// Define constants for directions
const DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

// Define class ToyDrone
class ToyDrone {
  constructor() {
    this.x = null;
    this.y = null;
    this.direction = null;
    this.isPlaced = false;
  }

  // Method to place the drone
  place(x, y, direction) {
    if (this.isValidPosition(x, y) && DIRECTIONS.includes(direction)) {
      this.x = x;
      this.y = y;
      this.direction = direction;
      this.isPlaced = true;
    }
  }

  // Method to move the drone
  move() {
    if (!this.isPlaced) return;

    let newX = this.x;
    let newY = this.y;

    switch (this.direction) {
      case 'NORTH':
        newY++;
        break;
      case 'EAST':
        newX++;
        break;
      case 'SOUTH':
        newY--;
        break;
      case 'WEST':
        newX--;
        break;
    }

    if (this.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  // Method to rotate the drone to the left
  left() {
    if (!this.isPlaced) return;
    let index = DIRECTIONS.indexOf(this.direction);
    index = (index - 1 + DIRECTIONS.length) % DIRECTIONS.length;
    this.direction = DIRECTIONS[index];
  }

  // Method to rotate the drone to the right
  right() {
    if (!this.isPlaced) return;
    let index = DIRECTIONS.indexOf(this.direction);
    index = (index + 1) % DIRECTIONS.length;
    this.direction = DIRECTIONS[index];
  }

  // Method to report the position and direction of the drone
  report() {
    if (!this.isPlaced) return 'Drone is not placed';
    return `${this.x},${this.y},${this.direction}`;
  }

  // Method to check if the position is valid
  isValidPosition(x, y) {
    return x >= 0 && x <= 10 && y >= 0 && y <= 10;
  }

  // Method to attack
  attack() {
    if (!this.isPlaced) return;

    let attackX = this.x;
    let attackY = this.y;

    switch (this.direction) {
      case 'NORTH':
        attackY += 2;
        break;
      case 'EAST':
        attackX += 2;
        break;
      case 'SOUTH':
        attackY -= 2;
        break;
      case 'WEST':
        attackX -= 2;
        break;
    }

    if (this.isValidPosition(attackX, attackY)) {
      console.log(`Projectile fired at ${attackX},${attackY}`);
    } else {
      console.log('No free spaces for attack');
    }
  }
}

function updateDronePosition() {
  // Get a reference to the drone element
  const droneElement = document.getElementById('drone');

  // Update the drone's position on the page based on its x and y coordinates
  // and direction
  droneElement.style.left = `${drone.x * 50}px`; // Assuming each grid cell is 50px wide
  droneElement.style.top = `${drone.y * 50}px`; // Assuming each grid cell is 50px tall
  // You might also rotate the drone element based on its direction
  droneElement.style.transform = `rotate(${getRotationAngle(
    drone.direction
  )}deg)`;
}

// Function to get the rotation angle based on direction
function getRotationAngle(direction) {
  switch (direction) {
    case 'NORTH':
      return 0;
    case 'EAST':
      return 90;
    case 'SOUTH':
      return 180;
    case 'WEST':
      return -90;
    default:
      return 0;
  }
}

// Test cases
const drone = new ToyDrone();
drone.place(0, 0, 'NORTH');
drone.move();
drone.left();
drone.left();
drone.attack();
console.log(drone.report()); // Output: 0,1,SOUTH

drone.place(0, 0, 'NORTH');
drone.left();
console.log(drone.report()); // Output: 0,0,WEST

drone.place(1, 2, 'EAST');
drone.move();
drone.move();
drone.left();
drone.move();
drone.attack();
console.log(drone.report()); // Output: 3,3,NORTH
