/**
 * 打字游戏 - Typing Game
 * 
 * 功能说明：
 * - 显示随机单词让用户输入
 * - 正确输入后得分并显示下一个单词
 * - 倒计时结束游戏结束
 * - 支持不同难度（简单/中等/困难）
 * - 难度影响正确输入后增加的时间
 * - 使用localStorage保存难度设置
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（单词显示、输入框、分数、时间、设置等）
 * 2. 定义单词数组
 * 3. 实现getRandomWord()函数 - 获取随机单词
 * 4. 实现addWordToDOM()函数 - 显示单词
 * 5. 实现updateScore()函数 - 更新分数
 * 6. 实现updateTime()函数 - 更新倒计时
 * 7. 实现gameOver()函数 - 显示游戏结束界面
 * 8. 添加所有事件监听器
 */

// ==================== DOM 元素获取 ====================
const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// ==================== 单词数据 ====================
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// ==================== 游戏状态变量 ====================
// 当前显示的单词
let randomWord;

// 分数
let score = 0;

// 剩余时间（秒）
let time = 10;

// TODO: 从localStorage读取难度设置，默认为'medium'
let difficulty = 'medium';

// TODO: 设置难度选择器的初始值

// ==================== 初始化 ====================
// TODO: 让输入框获得焦点

// TODO: 启动倒计时定时器

// ==================== 游戏函数 ====================

/**
 * 从单词数组中获取随机单词
 * @returns {string} 随机单词
 */
function getRandomWord() {
  // TODO: 实现随机单词获取
}

/**
 * 将单词添加到DOM显示
 */
function addWordToDOM() {
  // TODO: 实现单词显示
}

/**
 * 更新分数
 */
function updateScore() {
  // TODO: 实现分数更新
}

/**
 * 更新倒计时时间
 * 时间为0时结束游戏
 */
function updateTime() {
  // TODO: 实现时间更新
  // 1. 时间减1
  // 2. 更新显示
  // 3. 检查是否为0，是则结束游戏
}

/**
 * 游戏结束
 * 显示最终分数和重新开始按钮
 */
function gameOver() {
  // TODO: 实现游戏结束界面
}

// ==================== 初始显示 ====================
// TODO: 显示第一个单词

// ==================== 事件监听器 ====================

// TODO: 输入框输入事件
// 检查输入是否与当前单词匹配
// 匹配则：显示新单词、增加分数、清空输入框、根据难度增加时间

// TODO: 设置按钮点击事件 - 切换设置面板显示

// TODO: 设置表单变化事件 - 保存难度到localStorage
