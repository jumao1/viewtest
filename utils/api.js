const BASE_URL = 'https://cm.happycheer.com'

export const myRequest = (options) => {
		// 异步promise
		return new Promise((resolve, reject) => {
			
			uni.request({
				url: BASE_URL + options.url,
				method: options.method || 'GET',
				data: options.data || {},
				success: (res) => {
					
					if (res.data.code !== 200) {
						return uni.showToast({
							title: "数据获取失败"
						})
					}
					resolve(res)
				},
				fail(err) {
					uni.showToast({
						title: '请求接口失败'
					})
					reject(err)
				}
			})
		})
	}
	


	
