/**
 * 表单验证器 - Form Validator
 * 
 * 功能说明：
 * - 验证用户名、邮箱、密码等表单字段
 * - 显示错误和成功状态的视觉反馈
 * - 检查必填字段、字段长度、邮箱格式
 * - 验证两次密码输入是否一致
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（表单、用户名、邮箱、密码、确认密码）
 * 2. 实现showError()函数 - 显示错误信息和样式
 * 3. 实现showSuccess()函数 - 显示成功样式
 * 4. 实现checkEmail()函数 - 使用正则验证邮箱格式
 * 5. 实现checkRequired()函数 - 检查必填字段
 * 6. 实现checkLength()函数 - 检查输入长度范围
 * 7. 实现checkPasswordsMatch()函数 - 检查密码一致性
 * 8. 实现getFieldName()函数 - 获取格式化的字段名
 * 9. 添加表单提交事件监听器
 */

// ==================== DOM 元素获取 ====================
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// ==================== 显示函数 ====================

/**
 * 显示输入错误信息
 * 给父元素添加error类
 * 在small标签中显示错误信息
 * @param {HTMLElement} input - 输入框元素
 * @param {string} message - 错误信息
 */
function showError(input, message) {
  // TODO: 实现错误显示
}

/**
 * 显示成功状态
 * 给父元素添加success类
 * @param {HTMLElement} input - 输入框元素
 */
function showSuccess(input) {
  // TODO: 实现成功显示
}

// ==================== 验证函数 ====================

/**
 * 验证邮箱格式
 * 使用正则表达式验证
 * @param {HTMLElement} input - 邮箱输入框
 */
function checkEmail(input) {
  // TODO: 实现邮箱验证
}

/**
 * 检查必填字段
 * 遍历输入数组，检查每个是否为空
 * @param {Array} inputArr - 输入框数组
 * @returns {boolean} 是否有必填字段为空
 */
function checkRequired(inputArr) {
  // TODO: 实现必填检查
}

/**
 * 检查输入长度
 * 验证输入值是否在指定范围内
 * @param {HTMLElement} input - 输入框元素
 * @param {number} min - 最小长度
 * @param {number} max - 最大长度
 */
function checkLength(input, min, max) {
  // TODO: 实现长度检查
}

/**
 * 检查两次密码是否一致
 * @param {HTMLElement} input1 - 密码输入框
 * @param {HTMLElement} input2 - 确认密码输入框
 */
function checkPasswordsMatch(input1, input2) {
  // TODO: 实现密码匹配检查
}

// ==================== 辅助函数 ====================

/**
 * 获取格式化的字段名称
 * 将id首字母大写
 * @param {HTMLElement} input - 输入框元素
 * @returns {string} 格式化后的字段名
 */
function getFieldName(input) {
  // TODO: 实现字段名格式化
}

// ==================== 事件监听器 ====================
// TODO: 表单提交事件
// 阻止默认提交
// 调用各验证函数
