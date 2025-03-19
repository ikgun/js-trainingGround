export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor(size, position) {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    // Ensure minimum width and height of 1
    newSize.width = Math.max(1, newSize.width);
    newSize.height = Math.max(1, newSize.height);

    // Ensure the window does not exceed screen bounds
    newSize.width = Math.min(
      newSize.width,
      this.screenSize.width - this.position.x
    );

    newSize.height = Math.min(
      newSize.height,
      this.screenSize.height - this.position.y
    );

    // Assign the valid size to this.size
    this.size = newSize;
  }

  move(newPosition) {
    newPosition.x = Math.max(0, newPosition.x);
    newPosition.y = Math.max(0, newPosition.y);

    newPosition.x = Math.min(
      newPosition.x,
      this.screenSize.width - this.size.width
    );

    newPosition.y = Math.min(
      newPosition.y,
      this.screenSize.height - this.size.height
    );

    this.position = newPosition;
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
