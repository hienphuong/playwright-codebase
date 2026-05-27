# pw-practice-dev.playwrightvn.com
Trang pw-practice-dev.playwrightvn.com là WordPress admin
# Website Features

## 1. Login Page
- user name, pasword

## 2. Dashboard
- ... bao gồm activity, rêcnt comment, quick draft, site helth status

## 3. Posts
- ... bao gôm list post, add post, search post, detail post

## 4. Pages
list page, add page, search page,...
- ...
## 5. Media
- ... bao gôm

## 6. Setting 
- ...media library, add media file

## 7. Comments
 comment list, search comment, filter as status, author, trash

## 8. Users 
All user, user detail, add user , search user 

## 9. Appearance

Theme, patterns, Customize, widgets
fonts, Menus, Theme file editor

## 10. Plugins
Íntalled pluggins, add pluggins, plugin file editor

## 11. Tools

available tool , import , export, site health, ex

### Khi test thì để ý:

### 1. Login thành công / thất bại

- cần user name, password, lưu ở env, gitignore env
login sai password hiện thông báo gì, có secu hay không
- test: thiếu username thông báo lỗi gì 
- test: sau khi login redirect đến đúng trang không 
### 2. Redirect sau login có đúng không
### 3. Trang nào load lâu hơn bình thường
### 4. Form nào có validation