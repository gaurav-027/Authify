# Authify 🔐  
A simple and secure authentication system built using **Node.js**, **Express**, **MongoDB**, and **EJS**, featuring **JWT-based login**, **bcrypt password hashing**, and **email notifications**.

# 🚀 Features

✅ User Registration with hashed passwords using `bcrypt`  
✅ Login authentication with secure JWT cookies  
✅ Sends email notifications using `Nodemailer`  
✅ MongoDB integration via `Mongoose`  
✅ EJS templating for frontend  
✅ Clean and beginner-friendly structure  

# 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | EJS, HTML, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Security** | JWT, bcrypt, cookie-parser |
| **Email Service** | Nodemailer (Gmail SMTP) |


# ⚙️ Installation & Setup

 1️⃣ Clone the repository

>>> https://github.com/gaurav-027/Authify.git
  cd Authify

2️⃣ Install dependencies

npm install

3️⃣ Update configuration

Open the server.js file and replace your Gmail ID and App Password in this part:

const transporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "youremail@gmail.com",
        pass: "yourapppassword"
    }
});


4️⃣ Start the server

npx nodemon server.js

Now open your browser and visit:
👉 http://localhost:9000


✉️ Email Functionality
	•	Sends a notification email to the admin when a new user registers.
	•	Sends a welcome email to the user with their login details.

👨‍💻 Author

Gaurav
📧 kr.gauravbca7@gmail.com￼

🪪 License

This project is licensed under the MIT License — free to use and modify.


⭐ If you like this project, don’t forget to star it on GitHub!
