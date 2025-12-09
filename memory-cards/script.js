/**
 * 记忆卡片应用 - Memory Cards
 * 
 * 功能说明：
 * - 创建问答式记忆卡片
 * - 点击卡片翻转显示答案
 * - 左右箭头切换卡片
 * - 使用localStorage持久化存储卡片
 * - 支持添加和清除卡片
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（卡片容器、导航按钮、表单元素等）
 * 2. 实现createCards()函数 - 创建所有卡片
 * 3. 实现createCard()函数 - 创建单个卡片元素
 * 4. 实现updateCurrentText()函数 - 更新卡片计数显示
 * 5. 实现getCardsData()函数 - 从localStorage获取卡片数据
 * 6. 实现setCardsData()函数 - 保存卡片数据到localStorage
 * 7. 添加所有事件监听器（上一张、下一张、添加、清除）
 */

// ==================== DOM 元素获取 ====================
const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// ==================== 状态变量 ====================
// 跟踪当前卡片索引
let currentActiveCard = 0;

// 存储DOM卡片元素
const cardsEl = [];

// TODO: 从localStorage获取卡片数据
const cardsData = [];

// ==================== 卡片创建函数 ====================

/**
 * 创建所有卡片
 * 遍历卡片数据数组，为每个创建DOM元素
 */
function createCards() {
  // TODO: 实现批量创建卡片
}

/**
 * 创建单个卡片DOM元素
 * 卡片包含正面（问题）和背面（答案）
 * @param {Object} data - 卡片数据 {question, answer}
 * @param {number} index - 卡片索引
 */
function createCard(data, index) {
  // TODO: 实现单个卡片创建
  // 1. 创建div元素
  // 2. 添加card类，第一张添加active类
  // 3. 创建正面和背面HTML
  // 4. 添加点击翻转事件
  // 5. 添加到cardsEl数组和DOM
}

/**
 * 更新当前卡片数/总数显示
 */
function updateCurrentText() {
  // TODO: 实现计数更新
}

// ==================== localStorage函数 ====================

/**
 * 从localStorage获取卡片数据
 * @returns {Array} 卡片数据数组
 */
function getCardsData() {
  // TODO: 实现数据获取
}

/**
 * 保存卡片数据到localStorage
 * @param {Array} cards - 卡片数据数组
 */
function setCardsData(cards) {
  // TODO: 实现数据保存
}

// ==================== 事件监听器 ====================

// TODO: 下一张按钮事件
// 当前卡片移出，下一张卡片显示

// TODO: 上一张按钮事件
// 当前卡片移出，上一张卡片显示

// TODO: 显示添加表单按钮事件
// TODO: 隐藏添加表单按钮事件

// TODO: 添加新卡片按钮事件
// 获取问题和答案输入值
// 创建新卡片并保存

// TODO: 清除所有卡片按钮事件
// 清空localStorage和DOM

// ==================== 初始化 ====================
// TODO: 调用createCards()创建初始卡片
