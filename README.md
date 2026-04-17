# 📝 Registration Form with Validation & Character Counter

A simple and interactive **registration form project** built using HTML, CSS, and JavaScript.
This project demonstrates **real-time form validation** and a **live character counter**.

---

## 🚀 Features

### ✅ Form Validation

* Name field cannot be empty
* Email must be in valid format (e.g., [user@gmail.com](mailto:user@gmail.com))
* Password must be at least 6 characters
* Real-time validation using JavaScript
* Submit button is disabled until all inputs are valid

### ✍️ Character Counter

* Live character counter for textarea
* Displays: `typed / max characters`
* Maximum limit: 200 characters
* Prevents exceeding limit using `maxlength`
* Warning message when limit is reached

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Modern UI with gradients, animations)
* JavaScript (DOM manipulation & validation)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html     # Structure of the form
├── style.css      # Styling and layout
├── script.js      # Validation and logic
└── README.md      # Project documentation
```

---

## ⚙️ How It Works

### 🔹 Validation Logic

* Uses JavaScript to check user inputs in real-time
* Uses `.trim()` to remove empty spaces in name field
* Uses Regex pattern for email validation
* Checks password length using `.length`

(Example from your code:) 

---

### 🔹 Character Counter Logic

* Listens to `input` event on textarea
* Updates character count dynamically
* Displays warning when limit is reached

---

## 📌 Future Improvements

* Add password strength indicator 🔐
* Add success/error icons ✔️ ❌
* Auto-expanding textarea
* Dark mode 🌙
* Backend integration (Node.js / Firebase)

---

## 🙌 Author

Developed by **Apsal**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share with others!
