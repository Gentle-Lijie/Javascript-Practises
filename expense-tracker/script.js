/**
 * 收支追踪器 - Expense Tracker
 * 
 * 功能说明：
 * - 添加收入和支出交易记录
 * - 计算并显示总余额、总收入、总支出
 * - 使用localStorage持久化存储数据
 * - 支持删除交易记录
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（余额、收入、支出显示、列表、表单、输入框）
 * 2. 从localStorage加载已保存的交易记录
 * 3. 实现addTransaction()函数 - 添加新交易
 * 4. 实现generateID()函数 - 生成随机ID
 * 5. 实现addTransactionDOM()函数 - 将交易添加到DOM列表
 * 6. 实现updateValues()函数 - 更新余额、收入、支出显示
 * 7. 实现removeTransaction()函数 - 删除交易
 * 8. 实现updateLocalStorage()函数 - 保存到localStorage
 * 9. 实现init()函数 - 初始化应用
 */

// ==================== DOM 元素获取 ====================
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// ==================== 数据存储 ====================
// TODO: 从localStorage加载交易记录
// 如果没有记录则使用空数组
let transactions = [];

// ==================== 交易操作函数 ====================

/**
 * 添加新交易
 * 验证输入不为空
 * 创建交易对象并添加到数组
 * 更新DOM和localStorage
 * @param {Event} e - 表单提交事件
 */
function addTransaction(e) {
  // TODO: 实现添加交易
}

/**
 * 生成随机交易ID
 * @returns {number} 随机ID
 */
function generateID() {
  // TODO: 实现ID生成
}

/**
 * 将交易添加到DOM列表
 * 根据金额正负添加不同的样式类
 * @param {Object} transaction - 交易对象
 */
function addTransactionDOM(transaction) {
  // TODO: 实现DOM添加
}

/**
 * 更新余额、收入和支出显示
 * 使用map获取所有金额
 * 使用reduce计算总和
 * 使用filter区分收入和支出
 */
function updateValues() {
  // TODO: 实现数值更新
}

/**
 * 根据ID删除交易
 * 使用filter过滤掉指定交易
 * @param {number} id - 要删除的交易ID
 */
function removeTransaction(id) {
  // TODO: 实现删除交易
}

/**
 * 将交易记录保存到localStorage
 */
function updateLocalStorage() {
  // TODO: 实现localStorage更新
}

/**
 * 初始化应用
 * 清空列表并重新渲染所有交易
 */
function init() {
  // TODO: 实现初始化
}

// ==================== 事件监听器 ====================
// TODO: 表单提交事件

// ==================== 启动应用 ====================
// TODO: 调用init()初始化
