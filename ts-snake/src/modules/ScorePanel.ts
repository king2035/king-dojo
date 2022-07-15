// 计分板类
class ScorePanel {
  private score = 0;
  public level = 1;

  private scoreEle: HTMLElement;
  private levelEle: HTMLElement;

  // 等级
  private maxLevel: number;

  // 多少分升一级
  private upScore: number;

  // 构造函数
  constructor (maxLevel = 10, upScore = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 增加
  addScore () {
    // 分数自增
    this.scoreEle.innerHTML = ++this.score + '';

    //
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  // 升级
  levelUp () {
    // 设置上限
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

// const sp = new ScorePanel();
// for (let i=0; i<80; i++) {
//   sp.addScore()
// }

export default ScorePanel;
