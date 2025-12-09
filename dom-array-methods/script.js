/**
 * DOM数组方法练习 - DOM Array Methods
 * 
 * 功能说明：
 * - 使用高阶函数操作数组数据
 * - 从API获取随机用户并分配随机财富
 * - 演示forEach、map、filter、sort、reduce等方法
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（主容器、各个按钮）
 * 2. 实现getRandomUser()函数 - 从API获取随机用户并添加随机金额
 * 3. 实现doubleMoney()函数 - 使用map将所有人的钱翻倍
 * 4. 实现sortByRichest()函数 - 使用sort按财富降序排列
 * 5. 实现showMillionaires()函数 - 使用filter只显示百万富翁
 * 6. 实现calculateWealth()函数 - 使用reduce计算总财富
 * 7. 实现addData()函数 - 向数据数组添加新对象
 * 8. 实现updateDOM()函数 - 更新页面显示
 * 9. 实现formatMoney()函数 - 格式化金额显示
 * 10. 添加所有按钮事件监听器
 */

// ==================== DOM 元素获取 ====================
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

// ==================== 数据存储 ====================
let data = [];

// ==================== API函数 ====================

/**
 * 从randomuser.me API获取随机用户
 * 为用户分配随机金额（0-1000000）
 * 使用async/await处理异步请求
 */
async function getRandomUser() {
  // TODO: 实现获取随机用户
}

// ==================== 数组操作函数 ====================

/**
 * 将所有用户的钱翻倍
 * 使用map方法返回新数组
 */
function doubleMoney() {
  // TODO: 使用map实现
}

/**
 * 按财富从高到低排序
 * 使用sort方法
 */
function sortByRichest() {
  // TODO: 使用sort实现
}

/**
 * 只显示百万富翁（财富>1000000）
 * 使用filter方法
 */
function showMillionaires() {
  // TODO: 使用filter实现
}

/**
 * 计算所有用户的总财富
 * 使用reduce方法
 */
function calculateWealth() {
  // TODO: 使用reduce实现
}

// ==================== 辅助函数 ====================

/**
 * 向数据数组添加新用户对象
 * @param {Object} obj - 用户对象
 */
function addData(obj) {
  // TODO: 实现添加数据
}

/**
 * 更新DOM显示所有用户
 * @param {Array} providedData - 要显示的数据数组
 */
function updateDOM(providedData = data) {
  // TODO: 实现DOM更新
}

/**
 * 将数字格式化为货币字符串
 * @param {number} number - 要格式化的数字
 * @returns {string} 格式化后的货币字符串
 */
function formatMoney(number) {
  // TODO: 实现金额格式化
}

// ==================== 事件监听器 ====================
// TODO: 添加用户按钮事件
// TODO: 翻倍按钮事件
// TODO: 排序按钮事件
// TODO: 显示百万富翁按钮事件
// TODO: 计算总财富按钮事件

// ==================== 初始化 ====================
// TODO: 初始获取几个随机用户
