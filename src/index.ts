
export default function preview_image(urls: string[], current?: string) {
	return new Promise<boolean>((resolve, reject) => {
		wx.previewImage({
			current, 		// 当前显示图片的http链接
			urls, 			// 需要预览的图片http链接列表
			success() {
				resolve(true);
			},
			fail(res) {
				reject(res);
			}
		});
	});
}
