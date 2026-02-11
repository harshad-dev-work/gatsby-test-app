import React, { useState } from "react";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "03ae6d16-xxxx-xxxx-xxxx-xxxxxxx");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully ✅");
            event.target.reset();
        } else {
            setResult("Something went wrong ❌");
        }
    };

    const styles: any = {
        container: {
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #e0f2fe, #c7d2fe)",
            padding: "20px",
        },
        card: {
            width: "100%",
            maxWidth: "500px",
            background: "#ffffff",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        },
        heading: {
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "26px",
            fontWeight: "bold",
            color: "#333",
        },
        inputGroup: {
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
        },
        label: {
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: 500,
            color: "#555",
        },
        input: {
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
            outline: "none",
        },
        textarea: {
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
            resize: "none",
            outline: "none",
        },
        button: {
            width: "100%",
            padding: "12px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "15px",
            marginTop: "10px",
        },
        result: {
            marginTop: "15px",
            textAlign: "center",
            fontSize: "14px",
            color: "#444",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Contact Us</h2>

                <form onSubmit={onSubmit}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Full Name</label>
                        <input type="text" name="name" required style={styles.input} />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email</label>
                        <input type="email" name="email" required style={styles.input} />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            style={styles.textarea}
                        ></textarea>
                    </div>

                    <button type="submit" style={styles.button}>
                        Submit Form
                    </button>

                    {result && <div style={styles.result}>{result}</div>}
                </form>
            </div>
        </div>
    );
}
