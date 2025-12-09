/**
 * 可排序列表 - Sortable List
 * 
 * 功能说明：
 * - 显示一个打乱顺序的列表
 * - 使用拖拽功能重新排序
 * - 点击检查按钮验证顺序是否正确
 * - 正确显示绿色，错误显示红色
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（列表容器、检查按钮）
 * 2. 定义正确顺序的数据数组
 * 3. 实现createList()函数 - 创建打乱顺序的列表
 * 4. 实现拖拽相关函数（dragStart、dragEnter、dragLeave、dragOver、dragDrop）
 * 5. 实现swapItems()函数 - 交换列表项位置
 * 6. 实现checkOrder()函数 - 验证顺序是否正确
 * 7. 实现addEventListeners()函数 - 添加拖拽事件监听器
 */

// ==================== DOM 元素获取 ====================
const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

// ==================== 数据定义 ====================
// 正确顺序的富豪榜单
const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

// 存储列表项DOM元素
const listItems = [];

// 记录拖拽开始的索引
let dragStartIndex;

// ==================== 初始化 ====================
// TODO: 调用createList()

// ==================== 列表创建函数 ====================

/**
 * 创建打乱顺序的列表
 * 1. 使用sort和Math.random()打乱数组顺序
 * 2. 为每个人创建列表项
 * 3. 添加拖拽事件监听器
 */
function createList() {
  // TODO: 实现列表创建
  // 1. 复制并打乱richestPeople数组
  // 2. 遍历创建li元素
  // 3. 设置data-index属性
  // 4. 创建序号和可拖拽内容
  // 5. 添加到listItems数组和DOM
  // 6. 调用addEventListeners()
}

// ==================== 拖拽函数 ====================

/**
 * 拖拽开始 - 记录开始位置
 */
function dragStart() {
  // TODO: 获取并保存拖拽开始的索引
}

/**
 * 拖拽进入目标 - 添加高亮样式
 */
function dragEnter() {
  // TODO: 添加over类
}

/**
 * 拖拽离开目标 - 移除高亮样式
 */
function dragLeave() {
  // TODO: 移除over类
}

/**
 * 拖拽经过目标 - 阻止默认行为以允许放置
 * @param {Event} e - 拖拽事件
 */
function dragOver(e) {
  // TODO: 阻止默认行为
}

/**
 * 放置 - 执行交换
 */
function dragDrop() {
  // TODO: 获取放置位置索引并交换
}

/**
 * 交换两个列表项的内容
 * @param {number} fromIndex - 起始索引
 * @param {number} toIndex - 目标索引
 */
function swapItems(fromIndex, toIndex) {
  // TODO: 实现内容交换
}

// ==================== 验证函数 ====================

/**
 * 检查当前顺序是否正确
 * 遍历列表项，与正确顺序对比
 * 正确添加right类，错误添加wrong类
 */
function checkOrder() {
  // TODO: 实现顺序验证
}

/**
 * 为所有可拖拽元素添加事件监听器
 */
function addEventListeners() {
  // TODO: 为draggable元素添加dragstart事件
  // TODO: 为li元素添加dragover、drop、dragenter、dragleave事件
}

// ==================== 事件监听器 ====================
// TODO: 检查按钮点击事件
