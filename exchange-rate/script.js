/**
 * 汇率转换器 - Exchange Rate Calculator
 * 
 * 功能说明：
 * - 从API获取实时汇率数据
 * - 支持两种货币之间的转换
 * - 支持交换货币功能
 * - 实时更新转换结果
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（货币选择器、金额输入框、汇率显示、交换按钮）
 * 2. 实现calculate()函数 - 从API获取汇率并计算转换结果
 * 3. 添加货币选择和金额输入的事件监听器
 * 4. 实现交换货币功能
 * 5. 页面加载时执行初始计算
 */

// ==================== DOM 元素获取 ====================
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// ==================== 核心功能函数 ====================

/**
 * 计算汇率转换
 * 从汇率API获取数据
 * 计算两种货币之间的汇率
 * 更新显示结果
 */
function calculate() {
  // TODO: 实现汇率计算
  // 1. 获取两个货币选择的值
  // 2. 使用fetch从API获取汇率数据
  // 3. 计算转换后的金额
  // 4. 更新汇率显示和转换结果
}

// ==================== 事件监听器 ====================
// TODO: 货币一选择变化事件
// TODO: 金额一输入事件
// TODO: 货币二选择变化事件
// TODO: 金额二输入事件
// TODO: 交换按钮点击事件 - 交换两种货币并重新计算

// ==================== 初始化 ====================
// TODO: 页面加载时执行初始计算