import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制类
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction = '';
  // 游戏开关
  isLive = true;

  constructor () {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 2);

    this.init();
  }

  init () {
    document.addEventListener('keydown', this.keydownHandler.bind(this));

    // 蛇移动
    this.run();
  }

  keydownHandler (event: KeyboardEvent) {
    // 改变蛇的前进方向
    this.direction = event.key;
  }

  // 控制蛇移动
  run () {
    // 蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 控制方向
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        // 向上移动 Top 减少
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
        case 'Right':
        X += 10;
        break;
    }

    // 检查蛇吃到食物
    this.checkEat(X, Y);

    // 修改蛇的坐标
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error: any) {
      // game over
      alert(error.message)
      // 结束游戏
      this.isLive = false;
    }

    // 定时调用-控制级别越高，蛇移动的速度越快
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 检查蛇是否吃到食物
  checkEat (X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 改变食物位置
      this.food.change();
      // 增加分数
      this.scorePanel.addScore();
      // 蛇长身体
      this.snake.addBody();
    }
  }
}

export default GameControl;
