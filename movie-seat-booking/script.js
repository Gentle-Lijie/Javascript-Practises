/**
 * 电影选座系统 - Movie Seat Booking
 * 
 * 功能说明：
 * - 显示电影院座位布局
 * - 选择/取消选择座位
 * - 显示已选座位数量和总价
 * - 使用localStorage保存选择状态
 * - 切换电影时更新票价
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（容器、座位、计数、总价、电影选择）
 * 2. 实现setMovieData()函数 - 保存电影选择到localStorage
 * 3. 实现updateSelectedCount()函数 - 更新选座数量和总价
 * 4. 实现populateUI()函数 - 从localStorage恢复选择状态
 * 5. 添加电影选择和座位点击事件监听器
 */

// ==================== DOM 元素获取 ====================
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// ==================== 初始化 ====================
// TODO: 调用populateUI()恢复之前的选择

// 获取票价
let ticketPrice = +movieSelect.value;

// ==================== localStorage函数 ====================

/**
 * 保存选择的电影索引和价格到localStorage
 * @param {number} movieIndex - 电影选项索引
 * @param {number} moviePrice - 电影票价
 */
function setMovieData(movieIndex, moviePrice) {
  // TODO: 实现数据保存
}

/**
 * 更新已选座位数量和总价
 * 同时保存选中座位的索引到localStorage
 */
function updateSelectedCount() {
  // TODO: 实现选座更新
  // 1. 获取所有已选座位
  // 2. 将座位索引保存到localStorage
  // 3. 更新数量和总价显示
  // 4. 保存电影选择数据
}

/**
 * 从localStorage恢复之前的选择状态
 * 恢复选中的座位和电影选择
 */
function populateUI() {
  // TODO: 实现状态恢复
  // 1. 获取保存的座位索引
  // 2. 为对应座位添加selected类
  // 3. 恢复电影选择
}

// ==================== 事件监听器 ====================

// TODO: 电影选择变化事件
// 更新票价并重新计算总价

// TODO: 座位点击事件（使用事件委托）
// 检查点击的是否为可选座位
// 切换selected类
// 更新选座计数

// ==================== 初始化更新 ====================
// TODO: 页面加载时更新显示
