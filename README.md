# Getting Started with Create React App
### 1. Clone Git
```bash
git clone https://github.com/SSzSun/devtest-student_view.git
```
### 2. Available Scripts
In the project director <br>
- Run ` npm i ` or ` npm install `<br>
- After `npm install` finish<br>
- Run ` npm start `<br>

Or I have created a demo in case you don't want to install it.
### 3. Demo
[Click Demo](https://solidi-thai-front-end-dev.vercel.app/)
## Data Test
<p>I have prepared two kinds of users: authorized users and unauthorized users.<br>
ผมได้เตรียม user ไว้ 2 แบบ โดยจะ user ที่มีสิทธิในการเข้าสู่ระบบ และ ID ที่ไม่มีสิทธิในการเข้าสู่ระบบ</p>

#### Have permission
username : `demo` <br>
password : `demo1`

#### Not have permission
username : `Bret` <br>
password : `st_@1` <br>

```ts
"permission": false, <---- ไม่มีสิทธิในการเข้าสู่ Dashboard
"permission": true, <---- มีสิทธิในการเข้าสู่ Dashboard
```
Additional user information can be found in the `user.ts` file.<br>
สามารถดูข้อมูล ผู้ใช้เพิ่มเติมได้ที่ไฟล์ `user.ts`

Ex user.ts
```ts
  {
    "id": 1, <---- ID
    "id_card": 600502, <---- รหัสนักศึกษา
    "name": "Leanne", <---- ชื่อ
    "last_name": "Graham", <---- นามสกุล
    "username": "Bret", <---- ชื่อผู้ใช้
    "password": "st_@1", <---- รหัสผ่าน
    "student_level": "sophomore", <---- ชั้นปีการศึกษา
    "permission": false, <---- สิทธิในการเข้าสู่ Dashboard
  },
```
