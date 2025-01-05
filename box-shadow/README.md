

**`box-shadow`** là một thuộc tính trong CSS dùng để tạo hiệu ứng bóng đổ cho phần tử HTML. Nó giúp thêm chiều sâu và làm phần tử nổi bật hơn trên giao diện.

### Cú pháp cơ bản:
```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

### Giải thích các giá trị:
1. **`offset-x`**: Khoảng cách bóng theo trục X (ngang). Giá trị dương đẩy bóng sang phải, âm đẩy sang trái.
2. **`offset-y`**: Khoảng cách bóng theo trục Y (dọc). Giá trị dương đẩy bóng xuống dưới, âm đẩy lên trên.
3. **`blur-radius`** *(tùy chọn)*: Độ mờ của bóng. Giá trị càng lớn thì bóng càng mờ. Nếu không khai báo hoặc đặt là `0`, bóng sẽ sắc nét.
4. **`spread-radius`** *(tùy chọn)*: Độ lan rộng của bóng. Giá trị dương làm bóng lớn hơn, giá trị âm làm bóng nhỏ hơn.
5. **`color`** *(tùy chọn)*: Màu sắc của bóng (có thể dùng `rgba()` để thêm độ trong suốt).
6. **`inset`** *(tùy chọn)*: Thêm từ khóa này nếu muốn bóng đổ vào bên trong phần tử.

### Ví dụ:

#### 1. Bóng đổ cơ bản:
```css
div {
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
}
```
- Bóng đổ cách 10px sang phải, 10px xuống dưới, mờ 5px.

#### 2. Bóng đổ có **spread-radius**:
```css
div {
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
}
```
- Bóng lan rộng thêm 2px.

#### 3. Bóng đổ **inset** (bên trong):
```css
div {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}
```
- Bóng nằm trong phần tử.

#### 4. Nhiều bóng đổ:
```css
div {
  box-shadow: 5px 5px 10px red, -5px -5px 10px blue;
}
```
- Phần tử có 2 bóng đổ: một đỏ, một xanh.

### Ứng dụng:
`box-shadow` được sử dụng rộng rãi trong thiết kế giao diện để tạo hiệu ứng nút bấm, thẻ thông báo, hoặc các phần tử có chiều sâu.

### Lưu ý:
- Không nên lạm dụng bóng đổ quá nhiều vì có thể làm giao diện trở nên rối mắt.
