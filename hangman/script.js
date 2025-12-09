/**
 * 猜词游戏（吊人游戏） - Hangman
 * 
 * 功能说明：
 * - 随机选择一个单词让玩家猜测
 * - 通过键盘输入字母进行猜测
 * - 正确的字母显示在单词位置
 * - 错误的字母显示在侧边，同时绘制吊人图形
 * - 猜错6次游戏结束
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（单词容器、错误字母容器、按钮、弹窗等）
 * 2. 定义单词数组并随机选择一个单词
 * 3. 实现displayWord()函数 - 显示单词（猜中的字母显示，未猜中的隐藏）
 * 4. 实现updateWrongLettersEl()函数 - 更新错误字母和吊人图形
 * 5. 实现showNotification()函数 - 显示重复输入提示
 * 6. 添加键盘事件监听器处理字母输入
 * 7. 添加重新开始按钮事件监听器
 */

// ==================== DOM 元素获取 ====================
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll('.figure-part');

// ==================== 游戏数据 ====================
const words = ['application', 'programming', 'interface', 'wizard'];

// TODO: 随机选择一个单词
let selectedWord = '';

// 游戏状态
let playable = true;

// 存储正确和错误的字母
const correctLetters = [];
const wrongLetters = [];

// ==================== 显示函数 ====================

/**
 * 显示单词
 * 将单词拆分为字母，猜中的显示，未猜中的显示空白
 * 检查是否猜出整个单词（胜利条件）
 */
function displayWord() {
  // TODO: 实现单词显示
  // 1. 使用split将单词拆分为字母数组
  // 2. 使用map为每个字母创建span元素
  // 3. 检查字母是否在correctLetters中
  // 4. 检查是否已猜出整个单词
}

/**
 * 更新错误字母显示和吊人图形
 * 根据错误次数显示对应的身体部位
 * 检查是否已经失败（错误次数达到上限）
 */
function updateWrongLettersEl() {
  // TODO: 实现错误字母更新
  // 1. 显示所有错误字母
  // 2. 根据错误次数显示吊人身体部位
  // 3. 检查是否失败
}

/**
 * 显示已输入字母的通知
 * 2秒后自动隐藏
 */
function showNotification() {
  // TODO: 实现通知显示
}

// ==================== 事件监听器 ====================

// TODO: 键盘按下事件
// 1. 检查游戏是否可玩
// 2. 检查按键是否为字母(keyCode 65-90)
// 3. 判断字母是否在单词中
// 4. 更新正确或错误字母数组
// 5. 检查字母是否已输入过

// TODO: 重新开始按钮事件
// 1. 重置游戏状态
// 2. 清空字母数组
// 3. 重新选择单词
// 4. 更新显示

// ==================== 初始化 ====================
// TODO: 调用displayWord()显示初始状态
