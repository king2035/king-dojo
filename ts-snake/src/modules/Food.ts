class Food {
  // 定义食物对应的元素
  private element: HTMLElement;

  constructor () {
    // 获取页面中food元素并赋值给element
    // 获取页面中的food元素并将其赋值给element
    // 末尾加上叹号，表示id为food的元素必定存在（非空）
    this.element = document.getElementById('food')!; // 加 ! 号表示，此元素不会为空
  }

  // 获取食物 X 轴坐标
  get X () {
    return this.element.offsetLeft;
  }

  // 获取食物 Y 轴坐标
  get Y () {
    return this.element.offsetTop;
  }

  // 修改食物位置
  change () {
    // 生成一个随机的位置
    // 食物的位置最小是0 最大是290
    // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
    // 生成0-290之间的坐标随机数，蛇每次移动一格10，食物位置必须是整10
    const top = Math.round(Math.random() * 29) * 10;
    const left = Math.round(Math.random() * 29) * 10;
    
    this.element.style.top = top + 'px';
    this.element.style.left = left + 'px';
  }

}

// test

// const food = new Food();

// food.change();

// console.log(food.X, food.Y);

export default Food;