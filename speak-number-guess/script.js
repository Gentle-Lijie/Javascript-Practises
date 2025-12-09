/**
 * 语音猜数字游戏 - Speak Number Guess
 * 
 * 功能说明：
 * - 使用Web Speech API识别用户语音
 * - 随机生成1-100的目标数字
 * - 根据用户说出的数字给出提示（更高/更低）
 * - 猜中后显示胜利界面
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（消息显示区域）
 * 2. 生成随机目标数字
 * 3. 初始化Web Speech Recognition API
 * 4. 实现onSpeak()函数 - 处理语音识别结果
 * 5. 实现writeMessage()函数 - 显示用户说的内容
 * 6. 实现checkNumber()函数 - 验证猜测的数字
 * 7. 实现getRandomNumber()函数 - 生成随机数
 * 8. 添加语音识别事件监听器
 */

// ==================== DOM 元素获取 ====================
const msgEl = document.getElementById('msg');

// ==================== 游戏初始化 ====================
// TODO: 生成1-100的随机目标数字
const randomNum = 0;

// 可在控制台查看目标数字（调试用）
console.log('Number:', randomNum);

// ==================== Web Speech API 初始化 ====================
// TODO: 初始化语音识别对象
// 注意处理浏览器兼容性（webkit前缀）
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = null; // TODO: 创建SpeechRecognition实例

// TODO: 启动语音识别

// ==================== 语音处理函数 ====================

/**
 * 处理语音识别结果
 * @param {Event} e - 语音识别事件
 */
function onSpeak(e) {
  // TODO: 实现语音处理
  // 1. 从事件中获取识别的文本
  // 2. 调用writeMessage显示内容
  // 3. 调用checkNumber验证数字
}

/**
 * 显示用户说的内容
 * @param {string} msg - 识别的文本
 */
function writeMessage(msg) {
  // TODO: 实现消息显示
}

/**
 * 验证猜测的数字
 * @param {string} msg - 用户说的内容
 */
function checkNumber(msg) {
  // TODO: 实现数字验证
  // 1. 将文本转换为数字
  // 2. 检查是否为有效数字
  // 3. 检查是否在1-100范围内
  // 4. 比较与目标数字的大小关系
  // 5. 给出"更高"、"更低"或"正确"的提示
}

/**
 * 生成1-100的随机数
 * @returns {number} 随机数
 */
function getRandomNumber() {
  // TODO: 实现随机数生成
}

// ==================== 事件监听器 ====================
// TODO: 语音识别结果事件
// TODO: 语音识别结束事件（重新开始识别）
// TODO: "再玩一次"按钮点击事件（刷新页面）
