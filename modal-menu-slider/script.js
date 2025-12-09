/**
 * 模态框和菜单滑块 - Modal Menu Slider
 * 
 * 功能说明：
 * - 汉堡菜单按钮控制侧边导航栏滑出/收回
 * - 点击外部区域关闭导航栏
 * - 模态框的打开和关闭
 * - 点击模态框外部区域关闭模态框
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（切换按钮、关闭按钮、打开按钮、模态框、导航栏）
 * 2. 实现侧边导航栏切换功能
 * 3. 实现点击外部关闭导航栏功能
 * 4. 实现模态框显示功能
 * 5. 实现模态框关闭功能
 * 6. 实现点击模态框外部关闭功能
 */

// ==================== DOM 元素获取 ====================
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');

// ==================== 导航栏控制函数 ====================

/**
 * 点击外部关闭导航栏
 * 检测点击是否在导航栏和切换按钮之外
 * @param {Event} e - 点击事件
 */
function closeNavbar(e) {
  // TODO: 实现外部点击关闭逻辑
  // 1. 检查导航栏是否已显示
  // 2. 检查点击目标是否在导航栏和切换按钮之外
  // 3. 如果是，则关闭导航栏并移除事件监听
}

// ==================== 事件监听器 ====================

// TODO: 切换按钮点击事件
// 切换导航栏显示/隐藏
// 添加外部点击监听

// TODO: 打开模态框按钮事件
// 添加show-modal类

// TODO: 关闭模态框按钮事件
// 移除show-modal类

// TODO: 窗口点击事件
// 如果点击的是模态框背景，关闭模态框
