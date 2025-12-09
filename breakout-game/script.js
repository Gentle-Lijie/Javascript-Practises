/**
 * 打砖块游戏 - Breakout Game
 * 
 * 功能说明：
 * - 使用Canvas绘制游戏界面
 * - 控制挡板左右移动来反弹小球
 * - 小球击中砖块后砖块消失并得分
 * - 当小球落到底部时游戏重置
 * - 清除所有砖块后游戏重新开始
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（规则按钮、关闭按钮、规则面板、画布）
 * 2. 初始化游戏变量（分数、砖块行列数、延迟时间）
 * 3. 创建小球属性对象（位置、大小、速度、方向、可见性）
 * 4. 创建挡板属性对象（位置、宽高、速度、移动方向）
 * 5. 创建砖块属性对象（宽高、间距、偏移量）
 * 6. 初始化砖块二维数组
 * 7. 实现drawBall()函数 - 在画布上绘制小球
 * 8. 实现drawPaddle()函数 - 在画布上绘制挡板
 * 9. 实现drawScore()函数 - 在画布上显示分数
 * 10. 实现drawBricks()函数 - 在画布上绘制所有砖块
 * 11. 实现movePaddle()函数 - 移动挡板并检测边界
 * 12. 实现moveBall()函数 - 移动小球并处理碰撞检测
 * 13. 实现increaseScore()函数 - 增加分数并检查是否通关
 * 14. 实现showAllBricks()函数 - 重置所有砖块为可见
 * 15. 实现draw()函数 - 清空画布并绘制所有元素
 * 16. 实现update()函数 - 游戏主循环，更新并重绘
 * 17. 实现keyDown()函数 - 处理按键按下事件
 * 18. 实现keyUp()函数 - 处理按键释放事件
 * 19. 添加键盘事件监听器
 * 20. 添加规则按钮点击事件监听器
 */

// ==================== DOM 元素获取 ====================
const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ==================== 游戏配置变量 ====================
let score = 0;
const brickRowCount = 9;
const brickColumnCount = 5;
const delay = 500;

// ==================== 小球属性 ====================
// TODO: 创建小球对象，包含位置(x,y)、大小(size)、速度(speed)、方向(dx,dy)、可见性(visible)
const ball = {
  // 在此实现
};

// ==================== 挡板属性 ====================
// TODO: 创建挡板对象，包含位置(x,y)、宽高(w,h)、速度(speed)、移动方向(dx)、可见性(visible)
const paddle = {
  // 在此实现
};

// ==================== 砖块属性 ====================
// TODO: 创建砖块信息对象，包含宽高(w,h)、间距(padding)、偏移量(offsetX,offsetY)、可见性(visible)
const brickInfo = {
  // 在此实现
};

// ==================== 初始化砖块数组 ====================
// TODO: 创建二维数组存储所有砖块的位置和属性
const bricks = [];

// ==================== 绘制函数 ====================

/**
 * 在画布上绘制小球
 * 使用arc方法绘制圆形
 */
function drawBall() {
  // TODO: 实现小球绘制
}

/**
 * 在画布上绘制挡板
 * 使用rect方法绘制矩形
 */
function drawPaddle() {
  // TODO: 实现挡板绘制
}

/**
 * 在画布上显示当前分数
 */
function drawScore() {
  // TODO: 实现分数显示
}

/**
 * 在画布上绘制所有可见的砖块
 */
function drawBricks() {
  // TODO: 实现砖块绘制
}

// ==================== 移动函数 ====================

/**
 * 移动挡板
 * 需要检测边界防止挡板移出画布
 */
function movePaddle() {
  // TODO: 实现挡板移动和边界检测
}

/**
 * 移动小球
 * 需要实现：
 * - 墙壁碰撞检测（左右上）
 * - 挡板碰撞检测
 * - 砖块碰撞检测
 * - 底部边界检测（游戏失败）
 */
function moveBall() {
  // TODO: 实现小球移动和所有碰撞检测
}

// ==================== 游戏逻辑函数 ====================

/**
 * 增加分数
 * 检查是否清除所有砖块（通关）
 */
function increaseScore() {
  // TODO: 实现分数增加和通关检测
}

/**
 * 重置所有砖块为可见状态
 */
function showAllBricks() {
  // TODO: 实现砖块重置
}

/**
 * 清空画布并绘制所有游戏元素
 */
function draw() {
  // TODO: 实现画面绘制
}

/**
 * 游戏主循环
 * 使用requestAnimationFrame实现动画
 */
function update() {
  // TODO: 实现游戏循环
}

// ==================== 事件处理函数 ====================

/**
 * 处理按键按下事件
 * 左右方向键控制挡板移动
 */
function keyDown(e) {
  // TODO: 实现按键按下处理
}

/**
 * 处理按键释放事件
 * 停止挡板移动
 */
function keyUp(e) {
  // TODO: 实现按键释放处理
}

// ==================== 事件监听器 ====================
// TODO: 添加键盘事件监听器

// TODO: 添加规则按钮事件监听器

// ==================== 启动游戏 ====================
// TODO: 调用update()启动游戏循环
