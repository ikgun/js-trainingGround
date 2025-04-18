/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  const board = {
    "The Best Ever": 1000000,
  };
  return board;
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  if (scoreBoard.hasOwnProperty(player)) {
    delete scoreBoard[player];
  }

  return scoreBoard;
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  const playersScore = scoreBoard[player];
  scoreBoard[player] = playersScore + points;
  return scoreBoard;
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  for (const key in scoreBoard) {
    scoreBoard[key] = scoreBoard[key] + 100;
  }
  return scoreBoard;
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
export function normalizeScore(params) {
  let score;
  let normalizeFunction;
  for (const key in params) {
    if (key === "score") {
      score = params[key];
    } else {
      normalizeFunction = params[key];
    }
  }
  return normalizeFunction(score);
}
