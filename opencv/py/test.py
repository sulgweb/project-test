import cv2
import numpy as np


# 固定尺寸
def resizeImg(image, height=900):
    h, w = image.shape[:2]
    pro = height / h
    size = (int(w * pro), int(height))
    img = cv2.resize(image, size)
    return img


# 边缘检测
def getCanny(image):
    # 高斯模糊
    binary = cv2.GaussianBlur(image, (3, 3), 2, 2)
    # 边缘检测
    binary = cv2.Canny(binary, 60, 240, apertureSize=3)
    # 膨胀操作，尽量使边缘闭合
    kernel = np.ones((3, 3), np.uint8)
    binary = cv2.dilate(binary, kernel, iterations=1)
    return binary

def findMaxContour(image):
    # 寻找边缘
    contours, _ = cv2.findContours(image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    # print(contours)
    # 计算面积
    max_area = 0.0
    max_contour = []
    for contour in contours:
        currentArea = cv2.contourArea(contour)
        if currentArea > max_area:
            max_area = currentArea
            max_contour = contour
    return max_contour, max_area

path = r'D:\workplace\test-project\opencv\py\test.jpg'
outpath = r'D:\workplace\test-project\opencv\py\getCanny1.jpg'
img = cv2.imread(path)
img = resizeImg(img)
print('shape =', img.shape)
binary_img = getCanny(img)
cv2.imwrite(outpath, binary_img)

# img = cv2.imread(path)
# img = resizeImg(img)
# binary_img = getCanny(img)
# max_contour, max_area = findMaxContour(binary_img)
# cv2.drawContours(img, max_contour, -1, (0, 0, 255), 3)
# cv2.imwrite(outpath, img)

# output:	shape = (900, 420, 3)
