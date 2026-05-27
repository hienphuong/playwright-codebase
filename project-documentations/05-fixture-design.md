## Không có fixture:
Test 1: tạo page → tạo LoginPage → login → test → đóng
Test 2: tạo page → tạo LoginPage → login → test → đóng  ← lặp!
Test 3: tạo page → tạo LoginPage → login → test → đóng  ← lặp!

## Có fixture:
Fixture tự làm: tạo page → tạo LoginPage → login
Test 1: nhận sẵn loginPage → test
Test 2: nhận sẵn loginPage → test  ← gọn hơn!
Test 3: nhận sẵn loginPage → test

## ví dụ
fixtures/
└── index.ts       ← định nghĩa các fixture dùng chung

Fixture thường gặp:
- loginPage        ← trả về LoginPage đã sẵn sàng
- dashboardPage    ← trả về DashboardPage sau khi đã login
- authenticatedPage ← trả về page đã có session login