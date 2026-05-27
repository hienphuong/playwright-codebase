
## utils
utils/
├── env.ts          ← đọc biến môi trường (username, password, baseURL)
├── date.ts         ← format ngày tháng
└── random.ts       ← tạo data ngẫu nhiên cho test

## ví dụ .env

// thay vì viết process.env.USERNAME ở khắp nơi
// thì gom vào 1 chỗ
export const getUsername = () => process.env.USERNAME ?? '';
export const getPassword = () => process.env.PASSWORD ?? '';