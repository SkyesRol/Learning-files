export default {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 375,
            viewportHeight: 667,
            unitPrecision: 6, // 保留6位小数
            viewportUnit: 'vw', // 转换为vw单位
            selectorBlackList: ['ignore'], // 忽略class中包含ignore的元素
            minPixelValue: 1, // 小于1px的不转换
            mediaQuery: false, // 媒体查询中不转换
        }
    }

}