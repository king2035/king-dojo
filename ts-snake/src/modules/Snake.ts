class Snake {
  // 获取蛇头
  head: HTMLElement;
  // 蛇身，包括蛇头
  bodies: HTMLCollection;
  // 蛇容器
  element: HTMLElement;

  constructor () {
    // 断言 省略叹号
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇头坐标
  get X () {
    return this.head.offsetLeft;
  }

  get Y () {
    return this.head.offsetTop;
  }

  // 设置
  set X (value: number) {
    if (this.X === value) {
      return;
    }

    // X 值合法范围 0 - 290 之间
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了');
    }

    // 修改X值的时候，禁止蛇掉头，判断蛇头和身体第二节的坐标是否一致，是就是在掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement ).offsetLeft === value) {
      console.log('水平方向发生了掉头');
      // 如果掉头，让蛇往反方向移动
      // 向右
      if (value > this.X) {
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }

    // 移动身体
    this.moveBody();
    this.head.style.left = value + 'px';

    // 撞到自己
    this.checkHeadBody();
  }

  set Y (value: number) {
    if (this.Y === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了');
    }

    // 修改X值的时候，禁止蛇掉头，判断蛇头和身体第二节的坐标是否一致，是就是在掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement ).offsetTop === value) {
      console.log('水平方向发生了掉头');
      // 如果掉头，让蛇往反方向移动
      // 向右
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

    // 移动身体
    this.moveBody();
    this.head.style.top = value + 'px';

    // 撞到自己
    this.checkHeadBody();
  }

  // 蛇增加身体长度
  addBody () {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }

  // 身体移动
  moveBody () {
    /**
     * 将后面身体设置为前边身体的位置
     * 例子
     * 1. 第4节 = 第3节的位置
     * 2. 第3节 = 第2节的位置
     * 3. 第2节 = 蛇头的位置
     * 4. 蛇头 和 蛇身是两部分
    */

    // 遍历获取所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取蛇身体位置
      const X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      const Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 设置值
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  // 检查身体相撞
  checkHeadBody () {
    // 获取所有身体，检查其是否和舌头的坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      const bd = this.bodies[i] as HTMLElement;
      
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 撞到自己，游戏结束
        throw new Error('撞到自己了！～～')
      }
    }
  }

}

export default Snake;
