/**
 * 呼吸放松应用 - Relaxer App
 * 
 * 功能说明：
 * - 引导用户进行呼吸练习
 * - 显示"吸气"、"屏息"、"呼气"的视觉动画
 * - 使用CSS动画实现呼吸圈的放大和缩小
 * - 循环播放呼吸动画
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（容器、文本显示）
 * 2. 设置呼吸时间参数（总时间、吸气时间、屏息时间）
 * 3. 实现breathAnimation()函数 - 控制呼吸动画流程
 * 4. 使用setInterval循环执行呼吸动画
 */

// ==================== DOM 元素获取 ====================
const container = document.getElementById('container');
const text = document.getElementById('text');

// ==================== 时间配置 ====================
// TODO: 设置呼吸周期时间（毫秒）
// 总时间 = 7500ms (7.5秒)
// 吸气时间 = 总时间的2/5
// 屏息时间 = 总时间的1/5
// 呼气时间 = 总时间的2/5
const totalTime = 7500;
const breatheTime = 0; // TODO: 计算吸气时间
const holdTime = 0;    // TODO: 计算屏息时间

// ==================== 呼吸动画函数 ====================

/**
 * 执行一个完整的呼吸周期
 * 1. 显示"吸气"，添加grow类开始放大动画
 * 2. 延迟后显示"屏息"
 * 3. 再延迟后显示"呼气"，添加shrink类开始缩小动画
 */
function breathAnimation() {
  // TODO: 实现呼吸动画
  // 1. 设置文本为"吸气！"
  // 2. 设置容器类名为"container grow"
  // 3. 使用setTimeout在吸气时间后：
  //    - 设置文本为"屏息"
  //    - 再使用setTimeout在屏息时间后：
  //      - 设置文本为"呼气！"
  //      - 设置容器类名为"container shrink"
}

// ==================== 初始化和循环 ====================
// TODO: 立即执行一次呼吸动画
// TODO: 使用setInterval每隔totalTime执行一次呼吸动画
