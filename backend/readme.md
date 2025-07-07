# API Documentation

## User Routes
📌 **Base URL:** `/api/v1/user`

🛡️ **Authentication (where required):**

* Bearer Token via `Authorization` header:

  ```
  Authorization: Bearer <your_token>
  ```
* or JWT Cookie:

  ```
  Cookie: token=<your_token>;
  ```

---

## 📍 Endpoints

---

### ✅ `POST /api/v1/user/register`

Register a new user.

#### 🔸 Request Body (JSON):

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### 🔹 Success Response (201):

```json
{
  "success": true,
  "message": "User created successfully."
}
```

#### ⚠️ Error Responses:

- `401 Unauthorized` – Missing required fields
- `401 Unauthorized` – User already exists

---

### ✅ `POST /api/v1/user/login`

Authenticate user and return a token in both the response and cookie.

#### 🔸 Request Body (JSON):

```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### 🔹 Success Response (200):

```json
{
  "success": true,
  "message": "User Logged In Successfully.",
  "user": {
    "_id": "668b1b8...",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com",
    "profilePic": "https://res.cloudinary.com/..."
  }
}
```

🟠 **Note:** JWT token is also sent as an `httpOnly` cookie named `token`.

#### ⚠️ Error Responses:

- `401 Unauthorized` – Missing fields
- `401 Unauthorized` – Invalid email or password

---

### `GET /api/v1/user/logout`

Log out the user

#### 🔸 Success Response (200):

```json
{
  "succese": true,
  "message": "Logged out successfully"
}
```

---

### 🔐 `GET /api/v1/user/profile`

Returns the profile of the logged-in user.

#### 🛡 Requires Authentication (Token in header or cookie)

#### 🔹 Success Response (200):

```json
{
  "success": true,
  "user": {
    "_id": "668b1b8...",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com",
    "profilePic": "https://res.cloudinary.com/...",
    "address": "Los angelus, USA",
    "companyName": "ACME Foundation",
    "phoneNumber": "1234567890"
  }
}
```

---

### 🔐 `POST /api/v1/user/profile/update`

Update user's profile info including image.

#### 🔸 Content-Type:

`multipart/form-data`

#### 🔸 Fields:

| Field          | Type   | Required         | Description               |
| -------------- | ------ | ---------------- | ------------------------- |
| firstname      | string | optional         | New first name            |
| lastname       | string | optional         | New last name             |
| email          | string | optional         | New email                 |
| phoneNumber    | string | optional         | New phoneNumber           |
| profilePicture | file   | optional/default | Image file (png/jpg/jpeg) |
| company        | string | optional         | New company name          |
| location       | string | optional         | New Address               |

#### 🔹 Success Response (200):

```json
{
  "success": true,
  "message": "Profile updated successfully.",
  "user": {
    "_id": "668b1b8...",
    "firstname": "Updated Name",
    "lastname": "Doe",
    "email": "new@email.com",
    "profilePic": "https://res.cloudinary.com/..."
  }
}
```

---

## 📦 User Schema Reference

```js
{
  firstname: { type: String, required: true },
  lastname: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: "default.png" }
}
```

---

## 🧾 Summary Table

| Method | Route                         | Auth | Description                  |
| ------ | ----------------------------- | ---- | ---------------------------- |
| POST   | `/api/v1/user/register`       | ❌   | Register a new user          |
| POST   | `/api/v1/user/login`          | ❌   | Login & get token via cookie |
| GET    | `/api/v1/user/profile`        | ✅   | Get current user profile     |
| POST   | `/api/v1/user/profile/update` | ✅   | Update user info & image     |
| GET    | `/api/v1/user/logout`         | ✅   | Log out user                 |

---

## .env file contains

| Variable              | Value                   |
| --------------------- | ----------------------- |
| MONGO_URL             | `database_uri`        |
| SECRET_KEY            | `jwt_secret_key`      |
| CLOUDINARY_CLOUD_NAME | `cloude_name`           |
| CLOUDINARY_API_KEY    | `cloudinary_api_key`    |
| CLOUDINARY_API_SECRET | `cloudinary_api_secret` |
| FRONTEND_URL          | `frontend_url`          |

---

## 🛠 Developer Notes

- All authenticated routes require either:

  - `Authorization: Bearer <token>` header, or
  - Cookie: `token=<jwt>`

- Passwords are hashed using **bcryptjs**
- Profile pictures are stored via **Cloudinary**
- File handling uses `dataUri` + `cloudinary`

---
